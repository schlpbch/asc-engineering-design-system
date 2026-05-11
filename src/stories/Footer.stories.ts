import Footer from '../components/Footer.astro';

const BRAND = `
  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  <span class="text-base font-bold text-slate-900 dark:text-white">Acme</span>
  <p class="mt-2 text-sm text-slate-500 dark:text-slate-400 font-normal max-w-xs">The platform for building and managing modern services.</p>
`;

const BRAND_DARK = `
  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-accent-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  <span class="text-base font-bold text-white">Acme</span>
  <p class="mt-2 text-sm text-slate-400 font-normal max-w-xs">The platform for building and managing modern services.</p>
`;

const BRAND_MINIMAL = `
  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  <span>Acme</span>
`;

const COLUMNS = `
  <div>
    <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-3">Product</h4>
    <ul class="space-y-2">
      <li><a href="#" class="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Features</a></li>
      <li><a href="#" class="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a></li>
      <li><a href="#" class="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Changelog</a></li>
    </ul>
  </div>
  <div>
    <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-3">Developers</h4>
    <ul class="space-y-2">
      <li><a href="#" class="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Documentation</a></li>
      <li><a href="#" class="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">API Reference</a></li>
      <li><a href="#" class="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Status</a></li>
    </ul>
  </div>
  <div>
    <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-3">Company</h4>
    <ul class="space-y-2">
      <li><a href="#" class="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">About</a></li>
      <li><a href="#" class="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Blog</a></li>
      <li><a href="#" class="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Careers</a></li>
    </ul>
  </div>
`;

const COLUMNS_DARK = COLUMNS
  .replace(/text-slate-900 dark:text-white/g, 'text-white')
  .replace(/text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white/g, 'text-slate-400 hover:text-white');

const BOTTOM_LINKS = `
  <a href="#" class="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">Privacy</a>
  <a href="#" class="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">Terms</a>
  <a href="#" class="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">Cookies</a>
`;

const BOTTOM_LINKS_DARK = `
  <a href="#" class="hover:text-slate-200 transition-colors">Privacy</a>
  <a href="#" class="hover:text-slate-200 transition-colors">Terms</a>
  <a href="#" class="hover:text-slate-200 transition-colors">Cookies</a>
`;

const meta = {
  title: 'Navigation/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'dark'],
    },
    maxWidth: {
      control: 'select',
      options: ['lg', 'xl', '4xl', '6xl', 'full'],
    },
    copyright: { control: 'text' },
  },
};

export default meta;

export const Default = {
  args: {
    variant: 'default',
    maxWidth: '6xl',
    copyright: '© 2026 Acme Inc. All rights reserved.',
    slots: {
      brand: BRAND,
      columns: COLUMNS,
      bottom: BOTTOM_LINKS,
    },
  },
};

export const Dark = {
  args: {
    variant: 'dark',
    maxWidth: '6xl',
    copyright: '© 2026 Acme Inc. All rights reserved.',
    slots: {
      brand: BRAND_DARK,
      columns: COLUMNS_DARK,
      bottom: BOTTOM_LINKS_DARK,
    },
  },
};

export const Minimal = {
  args: {
    variant: 'minimal',
    maxWidth: '6xl',
    copyright: '© 2026 Acme Inc.',
    slots: {
      brand: BRAND_MINIMAL,
      bottom: BOTTOM_LINKS,
    },
  },
};

export const NoCopyright = {
  args: {
    variant: 'default',
    maxWidth: '6xl',
    slots: {
      brand: BRAND,
      columns: COLUMNS,
      bottom: BOTTOM_LINKS,
    },
  },
};
