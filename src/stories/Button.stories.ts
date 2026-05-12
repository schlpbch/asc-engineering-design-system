import Button from '../components/Button.astro';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'link'],
      description: 'Visual style of the button.',
      table: { defaultValue: { summary: 'solid' } },
    },
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Semantic color intent conveying purpose or severity.',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Controls padding and font size.',
      table: { defaultValue: { summary: 'md' } },
    },
    loading: {
      control: 'boolean',
      description: 'Shows a spinner and disables pointer events while true.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction and reduces opacity.',
      table: { defaultValue: { summary: 'false' } },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretches the button to fill its container.',
      table: { defaultValue: { summary: 'false' } },
    },
    loadingText: {
      control: 'text',
      description: 'Text shown beside the spinner when loading is true.',
    },
  },
};

export default meta;

export const Primary = {
  args: {
    variant: 'solid',
    intent: 'primary',
    size: 'md',
    slots: { default: 'Click me' },
  },
};

export const Secondary = {
  args: {
    variant: 'solid',
    intent: 'secondary',
    size: 'md',
    slots: { default: 'Click me' },
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    intent: 'primary',
    size: 'md',
    slots: { default: 'Outline Button' },
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
    intent: 'primary',
    size: 'md',
    slots: { default: 'Ghost Button' },
  },
};

export const Destructive = {
  args: {
    variant: 'solid',
    intent: 'error',
    size: 'md',
    slots: { default: 'Delete' },
  },
};

export const Loading = {
  args: {
    variant: 'solid',
    intent: 'primary',
    size: 'md',
    loading: true,
    loadingText: 'Saving...',
    slots: { default: 'Save' },
  },
};

export const Disabled = {
  args: {
    variant: 'solid',
    intent: 'primary',
    size: 'md',
    disabled: true,
    slots: { default: 'Disabled' },
  },
};

export const Small = {
  args: {
    variant: 'solid',
    intent: 'primary',
    size: 'sm',
    slots: { default: 'Small' },
  },
};

export const Large = {
  args: {
    variant: 'solid',
    intent: 'primary',
    size: 'lg',
    slots: { default: 'Large Button' },
  },
};
