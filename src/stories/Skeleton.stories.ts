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
      description: 'Shape of the skeleton placeholder matching the target content layout.',
      table: { defaultValue: { summary: 'list' } },
    },
    count: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of skeleton items to render.',
      table: { defaultValue: { summary: '3' } },
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
