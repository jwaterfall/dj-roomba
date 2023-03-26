/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'hsl(360,90%,55%)',
                background: 'hsl(345, 100%, 1%)',
            },
            fontFamily: {
                sans: ['var(--font-poppins)'],
            },
        },
    },
    plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
