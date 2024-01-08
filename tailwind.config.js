/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'rocktar-yellow': '#F2C94C',
        'pagebg': '#0b0b0b',
      }
    },
    fontFamily: {
      signautre: ['PriceDown', 'sans-serif'],
    }
  },
  plugins: [],
}

