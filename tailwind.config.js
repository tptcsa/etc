import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // إضافة هذا السطر لتفعيل الوضع المظلم
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#08697A', // اللون الأساسي الجديد
                secondary: '#4b5563', // اللون الثانوي الجديد
                accent: '#2563eb', // اللون المميز الجديد
            },
        },
    },

    plugins: [forms],
};
