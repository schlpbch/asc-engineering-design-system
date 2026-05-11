import Avatar from '../components/Avatar.astro';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'rounded'],
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'busy', 'away'],
    },
    src: { control: 'text' },
    alt: { control: 'text' },
    initials: { control: 'text' },
  },
};

export default meta;

export const WithImage = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Jane Smith',
    size: 'md',
    shape: 'circle',
  },
};

export const Initials = {
  args: {
    initials: 'JS',
    alt: 'Jane Smith',
    size: 'md',
    shape: 'circle',
  },
};

export const Sizes = {
  args: {
    initials: 'AB',
    size: 'md',
    shape: 'circle',
  },
};

// Individual size stories for cleaner Storybook display
export const SizeXs = {
  name: 'Size / XS',
  args: {
    initials: 'XS',
    size: 'xs',
    shape: 'circle',
  },
};

export const SizeSm = {
  name: 'Size / SM',
  args: {
    initials: 'SM',
    size: 'sm',
    shape: 'circle',
  },
};

export const SizeMd = {
  name: 'Size / MD',
  args: {
    initials: 'MD',
    size: 'md',
    shape: 'circle',
  },
};

export const SizeLg = {
  name: 'Size / LG',
  args: {
    initials: 'LG',
    size: 'lg',
    shape: 'circle',
  },
};

export const SizeXl = {
  name: 'Size / XL',
  args: {
    initials: 'XL',
    size: 'xl',
    shape: 'circle',
  },
};

export const StatusOnline = {
  name: 'Status / Online',
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Online user',
    size: 'md',
    shape: 'circle',
    status: 'online',
  },
};

export const StatusOffline = {
  name: 'Status / Offline',
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    alt: 'Offline user',
    size: 'md',
    shape: 'circle',
    status: 'offline',
  },
};

export const StatusBusy = {
  name: 'Status / Busy',
  args: {
    initials: 'BZ',
    size: 'md',
    shape: 'circle',
    status: 'busy',
  },
};

export const StatusAway = {
  name: 'Status / Away',
  args: {
    initials: 'AW',
    size: 'md',
    shape: 'circle',
    status: 'away',
  },
};

export const RoundedShape = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Rounded avatar',
    size: 'lg',
    shape: 'rounded',
  },
};

export const InitialsRounded = {
  args: {
    initials: 'TK',
    size: 'lg',
    shape: 'rounded',
  },
};
