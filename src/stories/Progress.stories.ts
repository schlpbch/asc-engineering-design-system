import Progress from '../components/Progress.astro';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    showValue: { control: 'boolean' },
    animated: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;

export const Default = {
  args: {
    value: 60,
    intent: 'primary',
    size: 'md',
  },
};

export const Success = {
  args: {
    value: 100,
    intent: 'success',
    size: 'md',
    label: 'Upload complete',
    showValue: true,
  },
};

export const Warning = {
  args: {
    value: 45,
    intent: 'warning',
    size: 'md',
    label: 'Storage usage',
    showValue: true,
  },
};

export const Error = {
  args: {
    value: 20,
    intent: 'error',
    size: 'md',
    label: 'Failed requests',
    showValue: true,
  },
};

export const Info = {
  args: {
    value: 75,
    intent: 'info',
    size: 'md',
    label: 'Processing',
    showValue: true,
  },
};

export const SizeXs = {
  name: 'Size / XS',
  args: {
    value: 60,
    intent: 'primary',
    size: 'xs',
  },
};

export const SizeSm = {
  name: 'Size / SM',
  args: {
    value: 60,
    intent: 'primary',
    size: 'sm',
  },
};

export const SizeMd = {
  name: 'Size / MD',
  args: {
    value: 60,
    intent: 'primary',
    size: 'md',
  },
};

export const SizeLg = {
  name: 'Size / LG',
  args: {
    value: 60,
    intent: 'primary',
    size: 'lg',
  },
};

export const WithLabel = {
  args: {
    value: 68,
    intent: 'primary',
    size: 'md',
    label: 'Overall progress',
    showValue: true,
  },
};

export const Animated = {
  args: {
    value: 70,
    intent: 'primary',
    size: 'md',
    animated: true,
    label: 'Loading…',
  },
};

export const IndeterminateLook = {
  args: {
    value: 70,
    intent: 'info',
    size: 'md',
    animated: true,
    label: 'Please wait…',
  },
};
