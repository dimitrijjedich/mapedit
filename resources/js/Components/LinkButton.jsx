import { Link } from '@inertiajs/react';
import PropTypes from 'prop-types';

const variants = {
    primary:   'bg-green',
    secondary: 'bg-yellow',
    danger:    'bg-red',
};

export default function LinkButton({ href, variant = 'primary', className = '', children }) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center justify-center rounded px-4 py-2 text-sm text-white hover:opacity-85 ${variants[variant]} ${className}`}
        >
            {children}
        </Link>
    );
}

LinkButton.propTypes = {
    href: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
