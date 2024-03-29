/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {max: '1000px'},
      'lg': {max: '2023px'},
      'nosm': {min: '1001px'}
    },
    extend: {
      colors: {
        "primary": "#0A192F",
        "secondary": "#F97316",
        "tertiary": "#54D6BB"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}