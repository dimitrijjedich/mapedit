import PropTypes from 'prop-types';

const variants = {
    primary:   'bg-green',
    secondary: 'bg-yellow',
    danger:    'bg-red',
};

export default function Button({ variant = 'primary', className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={`inline-flex items-center rounded px-4 py-2 text-sm text-white hover:opacity-85 focus:outline-none disabled:opacity-25 ${variants[variant]} ${disabled ? 'opacity-25' : ''} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
};
