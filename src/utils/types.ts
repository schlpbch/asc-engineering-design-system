/**
 * Common types and utilities for design system components
 */

import type { Size, Intent } from '../tokens';

// Base component props that all components should extend
export interface BaseProps {
  className?: string;
  id?: string;
  'data-testid'?: string;
}

// Common size variant prop
export interface SizeProps {
  size?: Size;
}

// Common intent/color variant prop
export interface IntentProps {
  intent?: Intent;
}

// Loading state prop
export interface LoadingProps {
  loading?: boolean;
  loadingText?: string;
}

// Disabled state prop
export interface DisabledProps {
  disabled?: boolean;
}

// Common interactive element props
export interface InteractiveProps extends BaseProps, DisabledProps {
  onClick?: (event: Event) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

// Form element props
export interface FormElementProps extends InteractiveProps {
  name?: string;
  required?: boolean;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

// Polymorphic component props
export type PolymorphicProps<T extends keyof HTMLElementTagNameMap = 'div'> = {
  as?: T;
} & BaseProps &
  Partial<HTMLElementTagNameMap[T]>;

// Extract component props from Astro component
export type ComponentProps<T> = T extends { Props: infer P } ? P : never;

// Helper type for creating variant maps
export type VariantMap<T extends string> = Record<T, string>;

// Helper type for size variant maps
export type SizeVariantMap = VariantMap<Size>;

// Helper type for intent variant maps
export type IntentVariantMap = VariantMap<Intent>;

// Utility type to make certain props required
export type RequireProps<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Utility type to omit certain props
export type OmitProps<T, K extends keyof T> = Omit<T, K>;

// Child content prop for components that can contain other elements
export interface ChildrenProps {
  children?: unknown; // Astro slot content
}

// Icon prop for components that can display icons
export interface IconProps {
  icon?: string;
  iconPosition?: 'left' | 'right';
}

// Common layout props
export interface SpacingProps {
  margin?: string;
  padding?: string;
}

// Component state types
export type ComponentState = 'idle' | 'loading' | 'success' | 'error';

// Animation props
export interface AnimationProps {
  animated?: boolean;
  animationDuration?: number;
}

// Accessibility props
export interface A11yProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  role?: string;
}

// Event handler types
export type ClickHandler = (event: Event) => void;
export type FocusHandler = (event: FocusEvent) => void;
export type KeyHandler = (event: KeyboardEvent) => void;
export type ChangeHandler = (event: Event) => void;

// Validation props for form elements
export interface ValidationProps {
  error?: string;
  warning?: string;
  success?: string;
  hint?: string;
}

// Pattern data types

export interface TimelineItem {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export interface Skill {
  name: string;
  level: 'expert' | 'proficient' | 'familiar';
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  href: string;
}
