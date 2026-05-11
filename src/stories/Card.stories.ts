import Card from '../components/Card.astro';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated', 'filled'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    interactive: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    variant: 'default',
    size: 'md',
    slots: { default: '<h3 style="font-weight:600;margin-bottom:8px">Card Title</h3><p style="color:#64748b">Card content goes here.</p>' },
  },
};

export const Outlined = {
  args: {
    variant: 'outlined',
    size: 'md',
    slots: { default: '<h3 style="font-weight:600;margin-bottom:8px">Outlined Card</h3><p style="color:#64748b">This card has an outlined style.</p>' },
  },
};

export const Elevated = {
  args: {
    variant: 'elevated',
    size: 'md',
    slots: { default: '<h3 style="font-weight:600;margin-bottom:8px">Elevated Card</h3><p style="color:#64748b">This card has a shadow.</p>' },
  },
};

export const Interactive = {
  args: {
    variant: 'default',
    size: 'md',
    interactive: true,
    slots: { default: '<h3 style="font-weight:600;margin-bottom:8px">Interactive Card</h3><p style="color:#64748b">Hover over this card.</p>' },
  },
};
