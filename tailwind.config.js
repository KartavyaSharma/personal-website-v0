const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
      'orange': theme('colors.orange.500'),
    }),
    extend: {
      maxHeight: {
        blogImg: '600px',
      },
      colors: {
        'terminalGreen': '#16C60C',
        orange: colors.orange,
        trueGray: colors.trueGray,
      },
      fontFamily: {
        'blogBody': ['Inter', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      fill: ['hover', 'focus'],
    },
  },
  plugins: [],
}
