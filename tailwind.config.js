/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px',
        },
        fontFamily: {
            exo2: ['var(--font-exo2)', 'sans-serif'],
            playfair: ['var(--font-playfair)', 'serif'],
            montserrat: ['var(--font-montserrat)', 'sans-serif'],
            oswald: ['var(--font-oswald)', 'sans-serif'],
        },
        colors: {
            white: '#FFFFFF',
            black: '#000000',
            verb: '#0083a8',
            verb2: '#006676',
        },
        extend: {
            aspectRatio: {
                '10/16': '10 / 16',
            },
            fontSize: {
                hero1: 'clamp(2rem, 4vw, 75px)',
            },
        },
    },
    plugins: [],
};
