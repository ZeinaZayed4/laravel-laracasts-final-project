const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.blade.php'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                "black": "red"
            }
        },
    },
    plugins: [],
};
