/**
 * Utility for conditional class name concatenation
 * Based on clsx with additional Tailwind-specific optimizations
 */

type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | { [key: string]: boolean | undefined | null }
  | ClassValue[];

/**
 * Concatenates class names conditionally
 * Similar to clsx but optimized for our use case
 */
export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string') {
      classes.push(input);
    } else if (typeof input === 'number') {
      classes.push(String(input));
    } else if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) classes.push(nested);
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key);
      }
    }
  }

  return classes.join(' ');
}

/**
 * Merges Tailwind classes, handling conflicts intelligently
 * Later classes override earlier ones for the same property
 */
export function mergeTailwindClasses(...classes: ClassValue[]): string {
  const classString = cn(...classes);
  const classArray = classString.split(' ').filter(Boolean);

  // Group classes by property type
  const classMap = new Map<string, string>();

  for (const cls of classArray) {
    const property = extractTailwindProperty(cls);
    classMap.set(property, cls);
  }

  return Array.from(classMap.values()).join(' ');
}

/**
 * Extract the base property from a Tailwind class
 * e.g., 'bg-red-500' -> 'bg', 'hover:bg-red-600' -> 'hover:bg', 'text-lg' -> 'text-size'
 * State and responsive prefixes are preserved in the key so that
 * e.g. `bg-accent-500` and `hover:bg-accent-600` are not treated as the same property.
 */
function extractTailwindProperty(className: string): string {
  // Handle responsive prefixes — keep as part of the key
  const responsiveMatch = className.match(/^(sm|md|lg|xl|2xl):/);
  const responsivePrefix = responsiveMatch ? responsiveMatch[0] : '';
  const withoutResponsive = responsivePrefix ? className.slice(responsivePrefix.length) : className;

  // Handle state prefixes — keep as part of the key
  const stateMatch = withoutResponsive.match(/^(hover|focus|active|disabled|dark|group-hover|group-focus):/);
  const statePrefix = stateMatch ? stateMatch[0] : '';
  const stateClean = statePrefix ? withoutResponsive.slice(statePrefix.length) : withoutResponsive;

  // Extract base property
  const parts = stateClean.split('-');

  if (parts.length === 1) return responsivePrefix + statePrefix + stateClean;

  const [base, modifier] = parts;

  // Group similar properties
  const propertyGroups: Record<string, string> = {
    text: isSize(modifier) ? 'text-size' : 'text-color',
    bg: 'bg',
    border: isSize(modifier) ? 'border-width' : 'border-color',
    rounded: 'border-radius',
    shadow: 'shadow',
    p: 'padding',
    px: 'padding-x',
    py: 'padding-y',
    pt: 'padding-top',
    pr: 'padding-right',
    pb: 'padding-bottom',
    pl: 'padding-left',
    m: 'margin',
    mx: 'margin-x',
    my: 'margin-y',
    mt: 'margin-top',
    mr: 'margin-right',
    mb: 'margin-bottom',
    ml: 'margin-left',
    w: 'width',
    h: 'height',
    flex: 'flex-direction',
  };

  return responsivePrefix + statePrefix + (propertyGroups[base] || base);
}

function isSize(modifier: string): boolean {
  const sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'];
  return sizes.includes(modifier);
}

/**
 * Creates a variant function for component styling
 * Useful for creating consistent component APIs
 */
export function createVariants<T extends Record<string, Record<string, string>>>(variants: T) {
  return function getVariant<K extends keyof T>(variant: K, value: keyof T[K]): string {
    return variants[variant][value] || '';
  };
}
