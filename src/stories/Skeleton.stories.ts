import Skeleton from '../components/Skeleton.astro';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['card', 'list', 'service'],
    },
    count: {
      control: { type: 'number', min: 1, max: 10 },
    },
  },
};

export default meta;

export const List = {
  args: {
    type: 'list',
    count: 3,
  },
};

export const Card = {
  args: {
    type: 'card',
    count: 3,
  },
};

export const Service = {
  args: {
    type: 'service',
    count: 3,
  },
};
