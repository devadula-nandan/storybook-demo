import Button from './Button';

/**
 * The `Button` component is the primary interactive element used to trigger
 * actions. It supports three visual variants and three sizes.
 */
export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
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
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'medium',
  },
  parameters: {
    // StackBlitz addon — opens this file in StackBlitz when "Open in StackBlitz" is clicked
    filePath: 'src/components/Button/Button.jsx',
  },
};

/** Secondary style — lower visual weight. */
export const Secondary = {
  args: {
    label: 'Button',
    variant: 'secondary',
    size: 'medium',
  },
  parameters: {
    filePath: 'src/components/Button/Button.jsx',
  },
};

/** Danger style — destructive or irreversible actions. */
export const Danger = {
  args: {
    label: 'Delete',
    variant: 'danger',
    size: 'medium',
  },
  parameters: {
    filePath: 'src/components/Button/Button.jsx',
  },
};

/** Small size across all variants. */
export const Small = {
  args: {
    label: 'Small',
    variant: 'primary',
    size: 'small',
  },
  parameters: {
    filePath: 'src/components/Button/Button.jsx',
  },
};

/** Large size for high-prominence actions. */
export const Large = {
  args: {
    label: 'Large',
    variant: 'primary',
    size: 'large',
  },
  parameters: {
    filePath: 'src/components/Button/Button.jsx',
  },
};

/** Disabled state — no interaction possible. */
export const Disabled = {
  args: {
    label: 'Disabled',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
  parameters: {
    filePath: 'src/components/Button/Button.jsx',
  },
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
  parameters: {
    filePath: 'src/components/Button/Button.jsx',
  },
};
