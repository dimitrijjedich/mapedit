import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                black:  '#111111',
                green:  '#00600e',
                yellow: '#797a19',
                red:    '#7f1308',
                orange: '#a85d17',
                gray:   '#737373',
                dark:   '#1f1f1f',
                silver: '#9a9a9a',
            },
        },
    },

    plugins: [forms],
};
