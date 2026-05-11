import { resolve } from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: ['@storybook/addon-docs'],

  framework: {
    name: 'storybook-astro',
    options: {},
  },

  core: {
    builder: '@storybook/builder-vite',
  },

  async viteFinal(config) {
    config.resolve ??= {};
    config.resolve.alias ??= {};
    (config.resolve.alias as Record<string, string>)['cssesc'] = resolve(__dirname, 'cssesc-esm.js');

    config.plugins ??= [];
    (config.plugins as unknown[]).unshift(tailwindcss());

    return config;
  },
};

export default config;
