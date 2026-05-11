# MCP Gateway UI Design System

> A comprehensive, accessible design system built for the MCP Gateway UI project using Astro and Tailwind CSS.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9%2B-blue.svg)](https://www.typescriptlang.org/)
[![Astro](https://img.shields.io/badge/Astro-5.16%2B-orange.svg)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1%2B-38bdf8.svg)](https://tailwindcss.com/)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-green.svg)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Design Tokens](#-design-tokens)
- [Components](#-components)
- [Component API Reference](#-component-api-reference)
- [Patterns & Recipes](#-patterns--recipes)
- [Customization](#-customization)
- [Accessibility](#-accessibility)
- [Dark Mode](#-dark-mode)
- [Responsive Design](#-responsive-design)
- [Development](#-development)
- [Testing](#-testing)
- [Best Practices](#-best-practices)
- [Troubleshooting](#-troubleshooting)

---

## 🎯 Overview

This design system provides a collection of reusable components, design tokens, and patterns for building consistent and accessible user interfaces. It follows modern design principles and supports both light and dark themes out of the box.

### Key Principles

- **Accessibility First** - WCAG 2.1 AA compliance built into every component
- **Composable** - Small, focused components that work together
- **Typed** - Full TypeScript support with strict mode
- **Themeable** - Design tokens for consistent customization
- **Responsive** - Mobile-first design that scales to any screen
- **Performance** - Minimal JavaScript, optimized for speed

## 🏗️ Architecture

```
src/design-system/
├── tokens/           # Design tokens (colors, typography, spacing)
├── utils/           # Utility functions and types
├── components/      # Primitive components
├── patterns/        # Higher-level component patterns
└── index.ts         # Main entry point
```

### Design Tokens

Located in `tokens/index.ts`, these define the visual language of the system:

- **Colors**: Brand colors, semantic colors, and neutral grays
- **Typography**: Font families, sizes, and weights
- **Spacing**: Consistent spacing scale
- **Shadows**: Elevation system
- **Border Radius**: Consistent corner radius values
- **Animation**: Duration and timing functions

### Components

#### Primitive Components

- **Button**: Versatile button with variants, sizes, and states
- **Input**: Text input with validation states and accessibility
- **Textarea**: Multi-line text input
- **Card**: Content container with various styles
- **Alert**: Contextual feedback messages
- **Badge**: Status indicators and labels
- **Modal**: Dialog overlays

#### Layout Components

- **Stack**: Flexible layout for spacing elements
- **Container**: Responsive content containers

#### Patterns

- **FormField**: Complete form field with label and validation

## 🚀 Getting Started

### Installation

The design system is already integrated into your project. Simply import components as needed:

```astro
---
// Import individual components
import Button from '@mcp-orchestrator/design-system/components/Button.astro';
import Card from '@mcp-orchestrator/design-system/components/Card.astro';

// Or import from the main index
import type { ButtonProps } from '@mcp-orchestrator/design-system';
---
```

### Basic Usage

```astro
---
import { Button, Card, Stack, Alert } from '@mcp-orchestrator/design-system/components';
---

<Card>
  <Stack size="md">
    <Alert intent="info"> Welcome to the design system! </Alert>

    <Stack direction="horizontal" size="sm">
      <Button intent="primary">Primary Action</Button>
      <Button variant="outline">Secondary Action</Button>
    </Stack>
  </Stack>
</Card>
```

## 🎨 Design Tokens

Design tokens are the visual design atoms of the system. They define colors, typography, spacing, and more.

### Color System

```typescript
// Brand colors
colors.accent[500]; // Primary brand color
colors.accent[600]; // Darker shade
colors.accent[400]; // Lighter shade

// Semantic colors
colors.success[500]; // Success state
colors.error[500]; // Error state
colors.warning[500]; // Warning state
colors.info[500]; // Info state

// Neutrals
colors.gray[50]; // Lightest gray
colors.gray[900]; // Darkest gray
```

### Typography Scale

```typescript
typography.fontSize.xs; // 0.75rem (12px)
typography.fontSize.sm; // 0.875rem (14px)
typography.fontSize.base; // 1rem (16px)
typography.fontSize.lg; // 1.125rem (18px)
typography.fontSize.xl; // 1.25rem (20px)
typography.fontSize['2xl']; // 1.5rem (24px)

typography.fontWeight.normal; // 400
typography.fontWeight.medium; // 500
typography.fontWeight.semibold; // 600
typography.fontWeight.bold; // 700
```

### Spacing Scale

```typescript
spacing[0]; // 0
spacing[1]; // 0.25rem (4px)
spacing[2]; // 0.5rem (8px)
spacing[3]; // 0.75rem (12px)
spacing[4]; // 1rem (16px)
spacing[6]; // 1.5rem (24px)
spacing[8]; // 2rem (32px)
spacing[12]; // 3rem (48px)
spacing[16]; // 4rem (64px)
```

### Shadows & Elevation

```typescript
shadows.sm; // Subtle shadow
shadows.md; // Medium shadow
shadows.lg; // Large shadow
shadows.xl; // Extra large shadow
```

---

## 📖 Component API Reference

### Button

```astro
<Button
  variant="solid"
  solid
  |
  outline
  |
  ghost
  |
  link
  size="md"
  xs
  |
  sm
  |
  md
  |
  lg
  |
  xl
  intent="primary"
  primary
  |
  secondary
  |
  success
  |
  warning
  |
  error
  |
  info
  fullWidth={false}
  loading={false}
  disabled={false}
  href="/path"
  Makes
  it
  a
  link
>
  Click me
</Button>
```

### Input

```astro
<Input
  type="text"
  size="md"
  placeholder="Enter text..."
  error="Error message"
  success="Success message"
  warning="Warning message"
  hint="Helper text"
  disabled={false}
  required={false}
/>
```

### Card

```astro
<Card
  variant="default"
  default
  |
  outlined
  |
  elevated
  |
  filled
  size="md"
  interactive={false}
  Makes
  it
  clickable
>
  Card content
</Card>
```

### Alert

```astro
<Alert
  intent="info"
  primary
  |
  secondary
  |
  success
  |
  warning
  |
  error
  |
  info
  variant="default"
  default
  |
  filled
  |
  outlined
  title="Alert Title"
  dismissible={true}
  icon={true}
>
  Alert message content
</Alert>
```

### Stack

```astro
<Stack
  direction="vertical"
  horizontal
  |
  vertical
  size="md"
  Controls
  gap
  between
  items
  align="stretch"
  start
  |
  center
  |
  end
  |
  stretch
  justify="start"
  start
  |
  center
  |
  end
  |
  between
  |
  around
  |
  evenly
>
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>
```

### FormField

```astro
<FormField
  label="Field Label"
  description="Optional description"
  required={true}
  error="Error message"
  hint="Helper text"
  layout="vertical"
  vertical
  |
  horizontal
>
  <Input placeholder="Your input here" />
</FormField>
```

---

## 🧩 Patterns & Recipes

Common patterns and recipes for building UIs with the design system.

### Form Layout

```astro
---
import { FormField, Input, Button, Stack } from '@mcp-orchestrator/design-system/components';
---

<form>
  <Stack size="lg">
    <FormField label="Email" required>
      <Input type="email" placeholder="you@example.com" />
    </FormField>

    <FormField label="Password" required>
      <Input type="password" placeholder="••••••••" />
    </FormField>

    <FormField
      label="Remember me"
      layout="horizontal"
      description="Keep me signed in on this device"
    >
      <Input type="checkbox" />
    </FormField>

    <Stack direction="horizontal" justify="between">
      <Button variant="outline">Cancel</Button>
      <Button intent="primary" type="submit">Sign In</Button>
    </Stack>
  </Stack>
</form>
```

### Card Grid Layout

```astro
---
import { Card, Stack } from '@mcp-orchestrator/design-system/components';
---

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card variant="elevated" interactive>
    <Stack size="sm">
      <h3 class="text-lg font-semibold">Card Title</h3>
      <p class="text-gray-600 dark:text-gray-400">Card description here</p>
    </Stack>
  </Card>
  <!-- More cards... -->
</div>
```

### Alert Notifications

```astro
---
import { Alert, Stack } from '@mcp-orchestrator/design-system/components';
---

<Stack size="md">
  <Alert intent="success" title="Success!" dismissible>
    Your changes have been saved successfully.
  </Alert>

  <Alert intent="warning" title="Warning"> This action cannot be undone. </Alert>

  <Alert intent="error" title="Error" dismissible>
    Failed to connect to the server. Please try again.
  </Alert>

  <Alert intent="info" variant="outlined">
    New features are available. Check out what's new!
  </Alert>
</Stack>
```

### Modal Dialog

```astro
---
import { Modal, Stack, Button } from '@mcp-orchestrator/design-system/components';
---

<Modal id="confirm-modal" title="Confirm Action">
  <Stack size="md">
    <p>Are you sure you want to proceed with this action?</p>

    <Stack direction="horizontal" justify="end" size="sm">
      <Button variant="outline" onclick="document.getElementById('confirm-modal').close()">
        Cancel
      </Button>
      <Button intent="primary">Confirm</Button>
    </Stack>
  </Stack>
</Modal>
```

### Loading States

```astro
---
import { Card, Stack, Button } from '@mcp-orchestrator/design-system/components';
---

<Card>
  <Stack size="md">
    <h3 class="text-lg font-semibold">Processing...</h3>
    <p>Please wait while we process your request.</p>
    <Button loading disabled>Processing</Button>
  </Stack>
</Card>
```

### Status Badges

```astro
---
import { Badge, Stack } from '@mcp-orchestrator/design-system/components';
---

<Stack direction="horizontal" size="xs">
  <Badge intent="success">Active</Badge>
  <Badge intent="warning">Pending</Badge>
  <Badge intent="error">Failed</Badge>
  <Badge intent="info">New</Badge>
</Stack>
```

---

## 🎨 Customization

### Using Design Tokens

Import tokens for consistent styling:

```typescript
import { colors, spacing, typography } from '@mcp-orchestrator/design-system/tokens';

const customStyles = {
  backgroundColor: colors.accent[500],
  padding: spacing[4],
  fontFamily: typography.fontFamily.sans,
};
```

### Custom Classes

All components accept a `className` prop for additional styling:

```astro
<Button className="custom-gradient-bg"> Custom Styled Button </Button>
```

### Theme Customization

Update design tokens in `tokens/index.ts` to customize the theme globally:

```typescript
export const colors = {
  accent: {
    500: '#your-brand-color', // Your primary brand color
    // ... other shades
  },
};
```

## ♿ Accessibility

The design system prioritizes accessibility:

- **Keyboard Navigation**: All interactive components support keyboard navigation
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: All color combinations meet WCAG guidelines
- **Focus Management**: Clear focus indicators and logical focus flow
- **Reduced Motion**: Respects `prefers-reduced-motion` settings

### Accessibility Features

- Automatic ID generation for form fields
- `aria-describedby` relationships for validation messages
- Semantic HTML elements and ARIA attributes
- High contrast mode support
- RTL language support ready

## 🌙 Dark Mode

Dark mode is supported automatically. Components adapt based on the `.dark` class on the root element:

```html
<!-- Light mode -->
<html>
  <body class="bg-white">
    <!-- Components will use light theme -->
  </body>
</html>

<!-- Dark mode -->
<html>
  <body class="dark bg-slate-900">
    <!-- Components will use dark theme -->
  </body>
</html>
```

## 📱 Responsive Design

Components are mobile-first and responsive:

- Consistent spacing scales across breakpoints
- Touch-friendly target sizes (minimum 44px)
- Responsive typography and layouts
- Flexible container and stack components

## 🔧 Development

### Adding New Components

1. Create the component in `components/` or `patterns/`
2. Follow the established naming conventions
3. Include TypeScript interfaces for props
4. Add accessibility features
5. Export from the appropriate index file
6. Add to the showcase page for testing

### Component Guidelines

- Use TypeScript interfaces for all props
- Extend base props (`BaseProps`, `SizeProps`, etc.)
- Include size and variant options where appropriate
- Support dark mode styling
- Add proper ARIA attributes
- Use the utility functions (`cn`, `mergeTailwindClasses`)
- Follow the established class naming patterns

## 🧪 Testing

Visit `/design-system` to see all components in action and test different states, variants, and sizes.

## 📝 Contributing

When contributing to the design system:

1. Follow the established patterns and conventions
2. Ensure accessibility compliance
3. Test in both light and dark modes
4. Update documentation and examples
5. Maintain backward compatibility when possible

## 🎯 Best Practices

### Do's

- ✅ Use design tokens for consistent styling
- ✅ Prefer composition over configuration
- ✅ Include accessibility features from the start
- ✅ Test components in isolation
- ✅ Follow naming conventions

### Don'ts

- ❌ Hardcode colors or spacing values
- ❌ Override component styles with `!important`
- ❌ Break accessibility patterns
- ❌ Create overly complex component APIs
- ❌ Ignore responsive considerations

---

## 🔧 Troubleshooting

### Common Issues

#### Styles Not Applying

**Problem**: Component styles are not showing up correctly.

**Solutions**:

- Ensure Tailwind CSS is properly configured in `tailwind.config.mjs`
- Check that the design system components are included in Tailwind's content paths
- Clear your build cache: `rm -rf .astro dist node_modules/.astro`
- Rebuild: `pnpm run build`

#### TypeScript Errors

**Problem**: TypeScript can't find component types or props.

**Solutions**:

- Ensure you're importing from the correct path: `'../design-system/components'`
- Check that `tsconfig.json` includes the design system directory
- Restart your TypeScript server in your IDE
- Run `pnpm run check` to validate TypeScript configuration

#### Dark Mode Not Working

**Problem**: Dark mode styles are not applying.

**Solutions**:

- Verify the `.dark` class is added to the root element (usually `<html>` or `<body>`)
- Check that dark mode variants are enabled in `tailwind.config.mjs`
- Ensure components are using dark mode classes: `dark:bg-gray-800`
- Clear browser cache and reload the page

#### Component Not Rendering

**Problem**: Component doesn't appear on the page.

**Solutions**:

- Check browser console for errors
- Verify the component is properly imported
- Ensure all required props are provided
- Check that the component is used within a valid Astro file (`.astro` extension)
- Verify that client-side directives (`client:load`, etc.) are used if needed

#### Accessibility Warnings

**Problem**: Accessibility tools are showing warnings.

**Solutions**:

- Ensure form inputs have associated labels (use `FormField` component)
- Verify that buttons have descriptive text or `aria-label` attributes
- Check color contrast ratios meet WCAG AA standards
- Add proper heading hierarchy (`h1` → `h2` → `h3`)
- Use semantic HTML elements where appropriate

### Performance Issues

#### Large Bundle Size

**Problem**: JavaScript/CSS bundles are too large.

**Solutions**:

- Enable Tailwind CSS purging for production builds
- Remove unused component imports
- Use dynamic imports for heavy components
- Minimize custom CSS and rely on design tokens

#### Slow Build Times

**Problem**: Build process is taking too long.

**Solutions**:

- Clear `.astro` cache directory
- Update dependencies: `pnpm update`
- Use Astro's island architecture to minimize JavaScript
- Check for circular dependencies in imports

### Getting Help

If you encounter issues not covered here:

1. **Check the Astro Documentation**: [https://docs.astro.build](https://docs.astro.build)
2. **Review Tailwind CSS Docs**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
3. **Search GitHub Issues**: Check for known issues in the project repository
4. **Ask for Help**: Open a new issue with:
   - Description of the problem
   - Steps to reproduce
   - Expected vs. actual behavior
   - Browser/OS information
   - Code snippets or screenshots

---

## 📚 Additional Resources

### Official Documentation

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Astro Component Documentation](https://docs.astro.build/en/core-concepts/astro-components/) - Astro component syntax and features
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript language reference

### Accessibility Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Web Content Accessibility Guidelines
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) - Accessible Rich Internet Applications
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Check color contrast ratios
- [Inclusive Components](https://inclusive-components.design/) - Accessible component patterns

### Design Resources

- [Refactoring UI](https://www.refactoringui.com/) - Design tips for developers
- [Laws of UX](https://lawsofux.com/) - Psychology principles for designers
- [Material Design](https://material.io/design) - Google's design system documentation

---

## 📝 Changelog

### Version 1.0.0 (January 2026)

**Initial Release**:

- ✅ Complete component library (Button, Input, Card, Alert, Badge, Modal, Stack, FormField)
- ✅ Design tokens (colors, typography, spacing, shadows)
- ✅ Dark mode support
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ Full TypeScript support
- ✅ Responsive design patterns
- ✅ Comprehensive documentation

---

## 🔗 Related Resources

- [MCP Orchestrator UI](../../README.md) - Main project documentation
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Astro Component Documentation](https://docs.astro.build/en/core-concepts/astro-components/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
