import '../src/index.css';
import { withStackBlitzCarbonExample } from '../src/storybook/withStackBlitzCarbonExample';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [withStackBlitzCarbonExample],
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
    repositoryUrl: 'https://github.com/devadula-nandan/storybook-demo',
    layout: 'centered',
  },
};

export default preview;
