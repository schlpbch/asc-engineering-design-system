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
    },
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    loadingText: { control: 'text' },
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
