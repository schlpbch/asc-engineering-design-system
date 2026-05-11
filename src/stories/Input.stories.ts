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
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
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
