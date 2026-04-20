import PropTypes from 'prop-types';

export const ColorShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    hex: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
});

export const TileShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    pixels: PropTypes.arrayOf(PropTypes.number),
});
