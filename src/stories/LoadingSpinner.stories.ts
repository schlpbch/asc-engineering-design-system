import LoadingSpinner from '../components/LoadingSpinner.astro';

const meta = {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    message: { control: 'text' },
  },
};

export default meta;

export const Default = {
  args: {
    size: 'md',
    message: 'Loading...',
  },
};

export const Small = {
  args: {
    size: 'sm',
    message: 'Loading...',
  },
};

export const Large = {
  args: {
    size: 'lg',
    message: 'Loading...',
  },
};

export const NoMessage = {
  args: {
    size: 'md',
    message: '',
  },
};
