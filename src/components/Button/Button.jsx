import PropTypes from 'prop-types';
import './Button.css';

/**
 * Primary UI component for user interaction.
 */
function Button({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
}) {
  return (
    <button
      type="button"
      className={['btn', `btn--${variant}`, `btn--${size}`].join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  /** The text displayed inside the button */
  label: PropTypes.string.isRequired,
  /** Visual style variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  /** Size of the button */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Disables the button when true */
  disabled: PropTypes.bool,
  /** Optional click handler */
  onClick: PropTypes.func,
};

export default Button;
