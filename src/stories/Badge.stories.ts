import Badge from '../components/Badge.astro';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'filled', 'dot'],
    },
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'pill'],
    },
    removable: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    variant: 'default',
    intent: 'primary',
    size: 'md',
    slots: { default: 'Badge' },
  },
};

export const Success = {
  args: {
    variant: 'filled',
    intent: 'success',
    size: 'md',
    shape: 'pill',
    slots: { default: 'Active' },
  },
};

export const Error = {
  args: {
    variant: 'filled',
    intent: 'error',
    size: 'md',
    shape: 'pill',
    slots: { default: 'Failed' },
  },
};

export const Warning = {
  args: {
    variant: 'default',
    intent: 'warning',
    size: 'md',
    slots: { default: 'Pending' },
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    intent: 'primary',
    size: 'md',
    slots: { default: 'Outline' },
  },
};

export const Dot = {
  args: {
    variant: 'dot',
    intent: 'success',
    size: 'md',
    slots: { default: 'Online' },
  },
};

export const Removable = {
  args: {
    variant: 'default',
    intent: 'secondary',
    size: 'md',
    removable: true,
    slots: { default: 'Filter tag' },
  },
};
