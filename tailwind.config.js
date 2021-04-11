const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    fill: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
      'orange': theme('colors.orange.500'),
    }),
    extend: {
      maxHeight: {
        blogImg: '800px',
      },
      colors: {
        'terminalGreen': '#16C60C',
        orange: colors.orange,
        trueGray: colors.trueGray,
      }
    }
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [],
}
