import Button from './Button';

/**
 * The `Button` component is the primary interactive element used to trigger
 * actions. It supports three visual variants and three sizes.
 */
// Carbon equivalent snippet shared across all Button stories
const CARBON_BUTTON_EXAMPLE = `import { Button } from '@carbon/react';

export default function App() {
  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '0.5rem' }}>
      {/* Primary */}
      <Button kind="primary">Primary</Button>

      {/* Secondary */}
      <Button kind="secondary">Secondary</Button>

      {/* Danger */}
      <Button kind="danger">Danger</Button>

      {/* Ghost */}
      <Button kind="ghost">Ghost</Button>

      {/* Disabled */}
      <Button kind="primary" disabled>Disabled</Button>

      {/* Small */}
      <Button kind="primary" size="sm">Small</Button>

      {/* Large */}
      <Button kind="primary" size="lg">Large</Button>
    </div>
  );
}`;

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    carbonExample: CARBON_BUTTON_EXAMPLE,
    carbonExampleLabel: 'Carbon React equivalent:',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'Visual style variant of the button',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
      table: { defaultValue: { summary: 'medium' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button when true',
      table: { defaultValue: { summary: false } },
    },
    onClick: { action: 'clicked' },
  },
};

// ──────────────────────────────────────────────
// Stories
// ──────────────────────────────────────────────

/** Default primary button at medium size. */
export const Primary = {
  args: { label: 'Button', variant: 'primary', size: 'medium' },
};

/** Secondary style — lower visual weight. */
export const Secondary = {
  args: { label: 'Button', variant: 'secondary', size: 'medium' },
};

/** Danger style — destructive or irreversible actions. */
export const Danger = {
  args: { label: 'Delete', variant: 'danger', size: 'medium' },
};

/** Small size across all variants. */
export const Small = {
  args: { label: 'Small', variant: 'primary', size: 'small' },
};

/** Large size for high-prominence actions. */
export const Large = {
  args: { label: 'Large', variant: 'primary', size: 'large' },
};

/** Disabled state — no interaction possible. */
export const Disabled = {
  args: { label: 'Disabled', variant: 'primary', size: 'medium', disabled: true },
};

/** All three variants side-by-side. */
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Danger" variant="danger" />
    </div>
  ),
};
