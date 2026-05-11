import FormField from '../patterns/FormField.astro';

const INPUT = '<input type="text" placeholder="Enter value..." style="display:block;width:100%;padding:8px 12px;border:1px solid #cbd5e1;border-radius:6px;font-size:14px;outline:none" />';
const INPUT_ERROR = '<input type="text" value="bad@email" style="display:block;width:100%;padding:8px 12px;border:1px solid #fca5a5;border-radius:6px;font-size:14px;outline:none" />';
const SELECT = '<select style="display:block;width:100%;padding:8px 12px;border:1px solid #cbd5e1;border-radius:6px;font-size:14px;background:white"><option>Option A</option><option>Option B</option><option>Option C</option></select>';

const meta = {
  title: 'Patterns/FormField',
  component: FormField,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    required: { control: 'boolean' },
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    error: { control: 'text' },
    warning: { control: 'text' },
    success: { control: 'text' },
    hint: { control: 'text' },
  },
};

export default meta;

export const Default = {
  args: {
    label: 'Username',
    required: false,
    layout: 'vertical',
    slots: { default: INPUT },
  },
};

export const Required = {
  args: {
    label: 'Email address',
    required: true,
    layout: 'vertical',
    hint: 'We will never share your email.',
    slots: { default: INPUT },
  },
};

export const WithError = {
  args: {
    label: 'Email address',
    required: true,
    layout: 'vertical',
    error: 'Please enter a valid email address.',
    slots: { default: INPUT_ERROR },
  },
};

export const WithDescription = {
  args: {
    label: 'API Key',
    description: 'Used to authenticate requests to the API. Keep this secret.',
    required: true,
    layout: 'vertical',
    slots: { default: INPUT },
  },
};

export const Horizontal = {
  args: {
    label: 'Timeout',
    layout: 'horizontal',
    hint: 'Value in seconds.',
    slots: { default: INPUT },
  },
};

export const WithSelect = {
  args: {
    label: 'Environment',
    required: true,
    layout: 'vertical',
    slots: { default: SELECT },
  },
};
