/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  darkMode: ['class'],
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      'dark': '#191835',
      'light': '#F3F3F3',
      'navbarBlur': 'rgba(0, 129, 230, 0.9);'
    },
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',
      },
      fontFamily: {
        monty: ['var(--font-monty)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
})
