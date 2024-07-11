import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
          fontFamily: {
            sans: ["Open Sans"],
            serif: ['SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', "serif"],
            body: ["Roboto", "sans-serif"],
            awesome: ["FontAwesome"],
          },
        },
    },

    plugins: [forms, typography],
};
