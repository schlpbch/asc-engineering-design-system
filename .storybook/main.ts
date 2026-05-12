import { resolve } from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],

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
    (config.resolve.alias as Record<string, string>)['@storybook/blocks'] = resolve(
      __dirname,
      '../node_modules/@storybook/addon-docs/dist/blocks.js'
    );

    config.plugins ??= [];
    (config.plugins as unknown[]).unshift(tailwindcss());

    return config;
  },
};

export default config;
