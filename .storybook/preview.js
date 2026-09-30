import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: 'alpha',
      hideNoControlsWarning: true,
    },
    backgrounds: {
      options: {
        light: { name: 'Light', value: '#ffffff' },
        gray: { name: 'Gray', value: '#f4f4f4' },
        dark: { name: 'Dark', value: '#161616' },
      },
      default: 'light',
    },
    // StackBlitz addon — set to your repository URL
    repositoryUrl: 'https://github.com/your-username/storybook-demo',
    layout: 'centered',
  },
};

export default preview;
