/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@stackblitz/storybook-addon-stackblitz',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
