import Textarea from '../components/Textarea.astro';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
    },
    rows: { control: { type: 'number', min: 1, max: 20 } },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    warning: { control: 'text' },
    success: { control: 'text' },
    hint: { control: 'text' },
  },
};

export default meta;

export const Default = {
  args: {
    size: 'md',
    rows: 3,
    placeholder: 'Enter your message...',
  },
};

export const WithError = {
  args: {
    size: 'md',
    rows: 3,
    placeholder: 'Enter description...',
    error: 'Description is required.',
  },
};

export const WithHint = {
  args: {
    size: 'md',
    rows: 4,
    placeholder: 'Enter notes...',
    hint: 'Maximum 500 characters.',
  },
};

export const NoResize = {
  args: {
    size: 'md',
    rows: 4,
    placeholder: 'This textarea cannot be resized.',
    resize: 'none',
  },
};

export const Disabled = {
  args: {
    size: 'md',
    rows: 3,
    placeholder: 'Disabled textarea',
    disabled: true,
  },
};

export const Large = {
  args: {
    size: 'lg',
    rows: 6,
    placeholder: 'Large textarea...',
  },
};
