const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
      'orange': theme('colors.orange.500')
    }),
    extend: {
      screens: {
        '3xl': '1800px',
        'big': '2000px'
      },
      maxHeight: {
        blogImg: '600px',
        featured: '450px',
        about: '550px',
        '5/6': '83.333333%',
      },
      padding: {
        18: '72px',
      },
      maxWidth: {
        '3/4': '75%',
        '2/3': '66.66666%',
        mobileImg: '100px',
        '8': '32px',
      },
      minWidth: {
        keepWlg: '56rem',
        keepWmd: '48rem',
        keepWsm: '32rem',
      },
      minHeight: {
        featuredlg: '400px',
        featuredmd: '300px',
        featuredbase: '200px',
      },
      colors: {
        'terminalGreen': '#16C60C',
        'background': '#24305E',
        'hover-bg': '#374785',
        'highlight': '#A8D0E6',
        'border': '#374785',
        'red-high': '#F76C6C',
        'border-red':'#F76C6C',
        'yellow': '#F8E9A1',
        orange: colors.orange,
        trueGray: colors.trueGray,
      },
      fontFamily: {
        'blogBody': ['Inter', 'sans-serif']
      },
      marginTop: {
        'featuredPadlg': '-60px',
        'featuredPad': '-20px',
      },
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      fill: ['group-hover', 'hover', 'focus'],
    },
  },
  plugins: [],
}
