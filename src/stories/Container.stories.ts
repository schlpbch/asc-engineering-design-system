import Container from '../components/Container.astro';

const CONTENT = '<div style="background:#f1f5f9;border-radius:8px;padding:24px;font-size:14px;color:#475569">Container content — resize the window to see max-width constraints.</div>';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '6xl', 'full'],
      description: 'Maximum width constraint applied to the container.',
      table: { defaultValue: { summary: 'xl' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Horizontal padding applied inside the container.',
      table: { defaultValue: { summary: 'md' } },
    },
    centered: {
      control: 'boolean',
      description: 'Centers the container horizontally with auto margins.',
      table: { defaultValue: { summary: 'true' } },
    },
    padding: {
      control: 'boolean',
      description: 'Whether to apply horizontal padding.',
      table: { defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;

export const Default = {
  args: {
    maxWidth: 'xl',
    size: 'md',
    centered: true,
    padding: true,
    slots: { default: CONTENT },
  },
};

export const Wide = {
  args: {
    maxWidth: '6xl',
    size: 'md',
    centered: true,
    padding: true,
    slots: { default: CONTENT },
  },
};

export const Narrow = {
  args: {
    maxWidth: 'sm',
    size: 'md',
    centered: true,
    padding: true,
    slots: { default: CONTENT },
  },
};

export const FullWidth = {
  args: {
    maxWidth: 'full',
    size: 'md',
    centered: false,
    padding: true,
    slots: { default: CONTENT },
  },
};

export const NoPadding = {
  args: {
    maxWidth: 'xl',
    size: 'md',
    centered: true,
    padding: false,
    slots: { default: CONTENT },
  },
};
