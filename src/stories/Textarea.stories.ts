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
      description: 'Font size and padding of the textarea.',
      table: { defaultValue: { summary: 'md' } },
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'CSS resize handle direction.',
      table: { defaultValue: { summary: 'vertical' } },
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Initial visible row count.',
      table: { defaultValue: { summary: '3' } },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when the field is empty.',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction and reduces opacity.',
      table: { defaultValue: { summary: 'false' } },
    },
    error: {
      control: 'text',
      description: 'Error message shown below the textarea with red styling.',
    },
    warning: {
      control: 'text',
      description: 'Warning message shown below the textarea with amber styling.',
    },
    success: {
      control: 'text',
      description: 'Success message shown below the textarea with green styling.',
    },
    hint: {
      control: 'text',
      description: 'Neutral helper text shown when no validation message is present.',
    },
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
