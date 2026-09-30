import sdk from '@stackblitz/sdk';

/**
 * Builds a fully self-contained StackBlitz project around a Carbon React
 * code snippet provided via the `carbonExample` story parameter.
 *
 * @param {string} exampleCode  – the JSX snippet to embed in App.jsx
 * @param {string} storyTitle   – used as the StackBlitz project title
 */
function buildCarbonProject(exampleCode, storyTitle) {
  return {
    title: `Carbon example — ${storyTitle}`,
    description: 'Auto-generated from Storybook',
    template: 'node',
    files: {
      'package.json': JSON.stringify(
        {
          name: 'carbon-example',
          private: true,
          version: '0.0.0',
          type: 'module',
          scripts: { dev: 'vite', build: 'vite build' },
          dependencies: {
            '@carbon/react': 'latest',
            react: '^18.3.1',
            'react-dom': '^18.3.1',
          },
          devDependencies: {
            '@vitejs/plugin-react': 'latest',
            vite: 'latest',
          },
        },
        null,
        2
      ),
      'vite.config.js': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({ plugins: [react()] });
`,
      'index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Carbon example</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`,
      'src/main.jsx': `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Required Carbon global styles
import '@carbon/react/scss/globals/grid/_index.scss';
import './index.scss';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
`,
      'src/index.scss': `@use '@carbon/react';
`,
      'src/App.jsx': `${exampleCode}
`,
    },
  };
}

/**
 * Storybook global decorator.
 *
 * When a story sets `parameters.carbonExample`, an "Open Carbon example in
 * StackBlitz" button is rendered beneath the story canvas. Clicking it opens
 * the inline project in a new StackBlitz tab.
 */
export const withStackBlitzCarbonExample = (Story, context) => {
  const { carbonExample, carbonExampleLabel } = context.parameters ?? {};

  return (
    <div>
      <Story />
      {carbonExample && (
        <div
          style={{
            marginTop: '1.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontFamily: 'sans-serif',
            fontSize: '0.8125rem',
            color: '#525252',
          }}
        >
          <span>{carbonExampleLabel ?? 'Try the Carbon equivalent:'}</span>
          <button
            type="button"
            onClick={() =>
              sdk.openProject(
                buildCarbonProject(carbonExample, context.name),
                { openFile: 'src/App.jsx', newWindow: true }
              )
            }
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              padding: '0.375rem 0.875rem',
              background: '#1294f0',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
              fontFamily: 'inherit',
              fontSize: '0.8125rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 24"
              width="18"
              height="14"
              style={{ flexShrink: 0 }}
            >
              <path
                style={{ fill: '#fff' }}
                d="M27.77 7.038A7.62 7.62 0 0 1 29.6 12a7.1 7.1 0 0 1-7.1 7.1c-1.419 0-2.82-.291-4.137-1.376-1.27-1.046-2.356-2.745-3.384-5.316-.972-2.429-1.886-3.73-2.74-4.434C11.43 7.31 10.58 7.1 9.5 7.1A4.9 4.9 0 0 0 4.6 12c0 1.38.522 2.628 1.295 3.524.783.906 1.75 1.376 2.605 1.376.127 0 .259-.008.392-.021l-.625-1.666a.4.4 0 0 1 .472-.528l4.732 1.183a.4.4 0 0 1 .244.597l-2.662 4.337a.4.4 0 0 1-.715-.068l-.655-1.746c-.37.065-.776.112-1.183.112-1.644 0-3.178-.873-4.27-2.139A7.62 7.62 0 0 1 2.4 12a7.1 7.1 0 0 1 7.1-7.1c1.419 0 2.82.291 4.137 1.376 1.27 1.046 2.356 2.745 3.384 5.316.972 2.429 1.886 3.73 2.74 4.434.809.665 1.658.874 2.739.874a4.9 4.9 0 0 0 4.9-4.9 5.42 5.42 0 0 0-1.295-3.524 4.553 4.553 0 0 0-.878-.79 3.602 3.602 0 0 1-7.077-.936 3.6 3.6 0 0 1 6.816-1.62c1.074.34 2.045 1.03 2.804 1.908ZM21.75 5.35a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z"
              />
            </svg>
            Open Carbon example in StackBlitz
          </button>
        </div>
      )}
    </div>
  );
};
