/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#06b6d4',
                secondary: '#1a1d23',
                background: '#25282E',
            },
        },
    },
    plugins: [],
}