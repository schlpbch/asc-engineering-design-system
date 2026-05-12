import IconButton from '../components/IconButton.astro';

const SVG_SETTINGS = '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>';

const SVG_CLOSE = '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>';

const SVG_MENU = '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>';

const SVG_SEARCH = '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers. Required since the button has no visible text.',
    },
    title: {
      control: 'text',
      description: 'Tooltip shown on hover (native browser tooltip).',
    },
    ariaPressed: {
      control: 'text',
      description: 'Set to `"true"` or `"false"` to mark the button as a toggle with pressed state.',
    },
  },
};

export default meta;

export const Settings = {
  args: {
    ariaLabel: 'Open settings',
    title: 'Settings',
    slots: { default: SVG_SETTINGS },
  },
};

export const Close = {
  args: {
    ariaLabel: 'Close',
    title: 'Close',
    slots: { default: SVG_CLOSE },
  },
};

export const Menu = {
  args: {
    ariaLabel: 'Open menu',
    title: 'Menu',
    slots: { default: SVG_MENU },
  },
};

export const Search = {
  args: {
    ariaLabel: 'Search',
    title: 'Search',
    slots: { default: SVG_SEARCH },
  },
};

export const Pressed = {
  args: {
    ariaLabel: 'Toggle menu',
    title: 'Menu (active)',
    ariaPressed: 'true',
    slots: { default: SVG_MENU },
  },
};
