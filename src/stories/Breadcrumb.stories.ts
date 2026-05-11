import Breadcrumb from '../components/Breadcrumb.astro';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    separator: {
      control: 'select',
      options: ['slash', 'chevron', 'dot'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

export const Default = {
  args: {
    separator: 'chevron',
    size: 'md',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Design System' },
    ],
  },
};

export const WithSlash = {
  args: {
    separator: 'slash',
    size: 'md',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Design System' },
    ],
  },
};

export const WithDot = {
  args: {
    separator: 'dot',
    size: 'md',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Design System' },
    ],
  },
};

export const Long = {
  args: {
    separator: 'chevron',
    size: 'md',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Workspace', href: '/workspace' },
      { label: 'Projects', href: '/workspace/projects' },
      { label: 'Frontend', href: '/workspace/projects/frontend' },
      { label: 'Design System' },
    ],
  },
};

export const TwoLevels = {
  args: {
    separator: 'chevron',
    size: 'md',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Current Page' },
    ],
  },
};

export const SizeSm = {
  name: 'Size / Small',
  args: {
    separator: 'chevron',
    size: 'sm',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Design System' },
    ],
  },
};

export const SizeLg = {
  name: 'Size / Large',
  args: {
    separator: 'slash',
    size: 'lg',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Design System' },
    ],
  },
};
