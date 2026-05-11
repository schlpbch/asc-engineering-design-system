import Header from '../components/Header.astro';

const LOGO = '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg><span>Acme</span>';

const NAV_LINKS = `
  <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Dashboard</a>
  <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Services</a>
  <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Logs</a>
  <a href="#" class="px-3 py-2 rounded-md text-sm font-medium bg-accent-50 text-accent-700 dark:bg-accent-950 dark:text-accent-300 transition-colors">Settings</a>
`;

const NAV_FILLED = `
  <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-accent-100 hover:text-white hover:bg-accent-600 transition-colors">Dashboard</a>
  <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-accent-100 hover:text-white hover:bg-accent-600 transition-colors">Services</a>
  <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-accent-100 hover:text-white hover:bg-accent-600 transition-colors">Logs</a>
  <a href="#" class="px-3 py-2 rounded-md text-sm font-medium bg-accent-600 text-white transition-colors">Settings</a>
`;

const ACTIONS = `
  <button class="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Search">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
  </button>
  <div class="w-8 h-8 rounded-full bg-accent-500 text-white text-sm font-semibold flex items-center justify-center">JS</div>
`;

const ACTIONS_FILLED = `
  <button class="p-2 rounded-lg text-accent-100 hover:text-white hover:bg-accent-600 transition-colors" aria-label="Search">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
  </button>
  <div class="w-8 h-8 rounded-full bg-white/20 text-white text-sm font-semibold flex items-center justify-center">JS</div>
`;

const MOBILE_MENU = `
  <a href="#" class="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Dashboard</a>
  <a href="#" class="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Services</a>
  <a href="#" class="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Logs</a>
  <a href="#" class="block px-3 py-2 rounded-md text-sm font-medium bg-accent-50 text-accent-700 dark:bg-accent-950 dark:text-accent-300 transition-colors">Settings</a>
`;

const meta = {
  title: 'Navigation/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'transparent', 'filled'],
    },
    maxWidth: {
      control: 'select',
      options: ['lg', 'xl', '4xl', '6xl', 'full'],
    },
    sticky: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    variant: 'default',
    maxWidth: '6xl',
    sticky: false,
    slots: {
      logo: LOGO,
      nav: NAV_LINKS,
      actions: ACTIONS,
      'mobile-menu': MOBILE_MENU,
    },
  },
};

export const Filled = {
  args: {
    variant: 'filled',
    maxWidth: '6xl',
    sticky: false,
    slots: {
      logo: LOGO,
      nav: NAV_FILLED,
      actions: ACTIONS_FILLED,
      'mobile-menu': MOBILE_MENU,
    },
  },
};

export const Sticky = {
  args: {
    variant: 'default',
    maxWidth: '6xl',
    sticky: true,
    slots: {
      logo: LOGO,
      nav: NAV_LINKS,
      actions: ACTIONS,
      'mobile-menu': MOBILE_MENU,
    },
  },
};

export const Transparent = {
  args: {
    variant: 'transparent',
    maxWidth: '6xl',
    sticky: false,
    slots: {
      logo: LOGO,
      nav: NAV_LINKS,
      actions: ACTIONS,
    },
  },
};

export const LogoOnly = {
  args: {
    variant: 'default',
    maxWidth: '6xl',
    slots: {
      logo: LOGO,
    },
  },
};
