import Stack from '../components/Stack.astro';

const ITEMS = '<div style="background:#e2e8f0;border-radius:6px;padding:12px 16px;font-size:14px">Item 1</div><div style="background:#e2e8f0;border-radius:6px;padding:12px 16px;font-size:14px">Item 2</div><div style="background:#e2e8f0;border-radius:6px;padding:12px 16px;font-size:14px">Item 3</div>';

const meta = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Flex direction: `vertical` stacks children top-to-bottom, `horizontal` left-to-right.',
      table: { defaultValue: { summary: 'vertical' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap between child elements.',
      table: { defaultValue: { summary: 'md' } },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Cross-axis alignment (`align-items`).',
      table: { defaultValue: { summary: 'start' } },
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Main-axis distribution (`justify-content`).',
      table: { defaultValue: { summary: 'start' } },
    },
    wrap: {
      control: 'boolean',
      description: 'Allows children to wrap onto multiple lines.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Vertical = {
  args: {
    direction: 'vertical',
    size: 'md',
    slots: { default: ITEMS },
  },
};

export const Horizontal = {
  args: {
    direction: 'horizontal',
    size: 'md',
    align: 'center',
    slots: { default: ITEMS },
  },
};

export const SpaceBetween = {
  args: {
    direction: 'horizontal',
    size: 'md',
    justify: 'between',
    slots: { default: ITEMS },
  },
};

export const Centered = {
  args: {
    direction: 'horizontal',
    size: 'md',
    align: 'center',
    justify: 'center',
    slots: { default: ITEMS },
  },
};

export const SmallGap = {
  args: {
    direction: 'vertical',
    size: 'xs',
    slots: { default: ITEMS },
  },
};

export const LargeGap = {
  args: {
    direction: 'vertical',
    size: 'xl',
    slots: { default: ITEMS },
  },
};
