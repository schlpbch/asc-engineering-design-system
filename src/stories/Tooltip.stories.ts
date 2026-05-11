import Tooltip from '../components/Tooltip.astro';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text' },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    maxWidth: { control: 'text' },
  },
};

export default meta;

export const Top = {
  args: {
    text: 'This is a helpful tooltip message.',
    position: 'top',
  },
};

export const Bottom = {
  args: {
    text: 'Tooltip appears below the trigger.',
    position: 'bottom',
  },
};

export const Left = {
  args: {
    text: 'Tooltip appears to the left.',
    position: 'left',
  },
};

export const Right = {
  args: {
    text: 'Tooltip appears to the right.',
    position: 'right',
  },
};

export const LongText = {
  args: {
    text: 'This is a longer tooltip message that explains the feature in more detail and may wrap to multiple lines.',
    position: 'top',
    maxWidth: '300px',
  },
};
