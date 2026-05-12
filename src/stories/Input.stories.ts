import Input from '../components/Input.astro';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'HTML input type, affects keyboard on mobile and browser validation.',
      table: { defaultValue: { summary: 'text' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Height and font size of the input field.',
      table: { defaultValue: { summary: 'md' } },
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
      description: 'Error message shown below the input with red styling. Mutually exclusive with warning/success.',
    },
    warning: {
      control: 'text',
      description: 'Warning message shown below the input with amber styling.',
    },
    success: {
      control: 'text',
      description: 'Success message shown below the input with green styling.',
    },
    hint: {
      control: 'text',
      description: 'Neutral helper text shown below the input when no validation message is present.',
    },
  },
};

export default meta;

export const Default = {
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'Enter text...',
  },
};

export const WithError = {
  args: {
    type: 'email',
    size: 'md',
    placeholder: 'Enter email...',
    value: 'invalid-email',
    error: 'Please enter a valid email address.',
  },
};

export const WithWarning = {
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'Enter username...',
    warning: 'This username is already taken.',
  },
};

export const WithSuccess = {
  args: {
    type: 'text',
    size: 'md',
    value: 'valid-username',
    success: 'Username is available!',
  },
};

export const WithHint = {
  args: {
    type: 'password',
    size: 'md',
    placeholder: 'Enter password...',
    hint: 'Password must be at least 8 characters.',
  },
};

export const Disabled = {
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const Search = {
  args: {
    type: 'search',
    size: 'md',
    placeholder: 'Search...',
  },
};
