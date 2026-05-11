/**
 * Design System - Main Entry Point
 *
 * Export all design system components, tokens, and utilities
 * for easy importing across the application.
 */

// Design Tokens
export * from './tokens';

// Utilities
export { cn, mergeTailwindClasses, createVariants } from './utils/cn';
export type * from './utils/types';

// Form Components
export { default as Button } from './components/Button.astro';
export { default as Input } from './components/Input.astro';
export { default as Textarea } from './components/Textarea.astro';

// Content Components
export { default as Card } from './components/Card.astro';
export { default as Alert } from './components/Alert.astro';
export { default as Badge } from './components/Badge.astro';
export { default as Avatar } from './components/Avatar.astro';

// Navigation Components
export { default as Header } from './components/Header.astro';
export { default as Footer } from './components/Footer.astro';
export { default as Breadcrumb } from './components/Breadcrumb.astro';

// Data Display Components
export { default as Table } from './components/Table.astro';
export { default as Tabs } from './components/Tabs.astro';
export { default as Progress } from './components/Progress.astro';

// Dialog Components
export { default as Modal } from './components/Modal.astro';
export { default as ModalHeader } from './components/ModalHeader.astro';
export { default as ModalFooter } from './components/ModalFooter.astro';

// Interactive Components
export { default as Dropdown } from './components/Dropdown.astro';
export { default as IconButton } from './components/IconButton.astro';
export { default as Tooltip } from './components/Tooltip.astro';

// Feedback Components
export { default as Toast } from './components/Toast.astro';
export { default as LoadingSpinner } from './components/LoadingSpinner.astro';
export { default as Skeleton } from './components/Skeleton.astro';

// Layout Components
export { default as Stack } from './components/Stack.astro';
export { default as Container } from './components/Container.astro';
export { default as IconContainer } from './components/IconContainer.astro';

// Section Components
export { default as SectionHeader } from './components/SectionHeader.astro';

// Patterns
export { default as FormField } from './patterns/FormField.astro';
export { default as ConfirmDialog } from './patterns/ConfirmDialog.astro';
export { default as FilterButtons } from './patterns/FilterButtons.astro';
export { default as PageSection } from './patterns/PageSection.astro';
export { default as Timeline } from './patterns/Timeline.astro';
export { default as TestimonialsGrid } from './patterns/TestimonialsGrid.astro';
export { default as SkillsGrid } from './patterns/SkillsGrid.astro';
export { default as ProjectGrid } from './patterns/ProjectGrid.astro';

// Component Types (for TypeScript)
export type { Props as ButtonProps } from './components/Button.astro';
export type { Props as InputProps } from './components/Input.astro';
export type { Props as TextareaProps } from './components/Textarea.astro';
export type { Props as CardProps } from './components/Card.astro';
export type { Props as AlertProps } from './components/Alert.astro';
export type { Props as BadgeProps } from './components/Badge.astro';
export type { Props as AvatarProps } from './components/Avatar.astro';
export type { Props as HeaderProps } from './components/Header.astro';
export type { Props as FooterProps } from './components/Footer.astro';
export type { Props as BreadcrumbProps } from './components/Breadcrumb.astro';
export type { Props as TableProps } from './components/Table.astro';
export type { Props as TabsProps } from './components/Tabs.astro';
export type { Props as ProgressProps } from './components/Progress.astro';
export type { Props as ModalProps } from './components/Modal.astro';
export type { Props as ModalHeaderProps } from './components/ModalHeader.astro';
export type { Props as ModalFooterProps } from './components/ModalFooter.astro';
export type { Props as DropdownProps } from './components/Dropdown.astro';
export type { Props as IconButtonProps } from './components/IconButton.astro';
export type { Props as TooltipProps } from './components/Tooltip.astro';
export type { Props as ToastProps } from './components/Toast.astro';
export type { Props as LoadingSpinnerProps } from './components/LoadingSpinner.astro';
export type { Props as SkeletonProps } from './components/Skeleton.astro';
export type { Props as StackProps } from './components/Stack.astro';
export type { Props as ContainerProps } from './components/Container.astro';
export type { Props as IconContainerProps } from './components/IconContainer.astro';
export type { Props as SectionHeaderProps } from './components/SectionHeader.astro';
export type { Props as FormFieldProps } from './patterns/FormField.astro';
export type { Props as FilterButtonsProps } from './patterns/FilterButtons.astro';
export type { Props as PageSectionProps } from './patterns/PageSection.astro';
export type { Props as TimelineProps } from './patterns/Timeline.astro';
export type { Props as TestimonialsGridProps } from './patterns/TestimonialsGrid.astro';
export type { Props as SkillsGridProps } from './patterns/SkillsGrid.astro';
export type { Props as ProjectGridProps } from './patterns/ProjectGrid.astro';

// Re-export common types for convenience
export type { Size, Intent } from './tokens';
export type {
  BaseProps,
  SizeProps,
  IntentProps,
  ValidationProps,
  LoadingProps,
  DisabledProps,
  InteractiveProps,
  TimelineItem,
  Testimonial,
  Skill,
  Project,
} from './utils/types';
