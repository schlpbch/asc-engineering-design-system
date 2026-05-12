import Alert from '../components/Alert.astro';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outlined'],
      description: 'Visual style of the alert container.',
      table: { defaultValue: { summary: 'default' } },
    },
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Semantic color intent conveying the nature of the message.',
      table: { defaultValue: { summary: 'info' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Controls padding and font size.',
      table: { defaultValue: { summary: 'md' } },
    },
    title: {
      control: 'text',
      description: 'Optional bold heading displayed above the message body.',
    },
    icon: {
      control: 'boolean',
      description: 'Whether to show a semantic icon matching the intent.',
      table: { defaultValue: { summary: 'true' } },
    },
    dismissible: {
      control: 'boolean',
      description: 'Renders an × button that hides the alert when clicked.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Info = {
  args: {
    intent: 'info',
    variant: 'default',
    title: 'Information',
    slots: { default: 'This is an informational message.' },
  },
};

export const Success = {
  args: {
    intent: 'success',
    variant: 'default',
    title: 'Success',
    slots: { default: 'Your changes have been saved successfully.' },
  },
};

export const Warning = {
  args: {
    intent: 'warning',
    variant: 'default',
    title: 'Warning',
    slots: { default: 'Please review your configuration before proceeding.' },
  },
};

export const Error = {
  args: {
    intent: 'error',
    variant: 'default',
    title: 'Error',
    slots: { default: 'Something went wrong. Please try again.' },
  },
};

export const Dismissible = {
  args: {
    intent: 'info',
    variant: 'default',
    title: 'Dismissible Alert',
    dismissible: true,
    slots: { default: 'Click the X to dismiss this alert.' },
  },
};

export const Filled = {
  args: {
    intent: 'primary',
    variant: 'filled',
    title: 'Filled Alert',
    slots: { default: 'This is a filled style alert.' },
  },
};

export const NoIcon = {
  args: {
    intent: 'info',
    variant: 'default',
    icon: false,
    slots: { default: 'Alert without an icon.' },
  },
};
