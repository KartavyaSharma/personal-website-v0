const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

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
        featured: '450px',
        about: '550px',
      },
      padding: {
        18: '72px',
      },
      maxWidth: {
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
      fill: ['hover', 'focus'],
    },
  },
  plugins: [
    //   plugin(function({ addUtilities }) {
    //     const newUtilities = {
    //         '.utterances': {
    //             maxWidth: '100%',
    //             margin: '0',
    //         },
    //         '.utterances-frame': {
    //             maxWidth: '100%',
    //             margin: '0',
    //         },
    //     }
    //     addUtilities(newUtilities);
    //   })
  ],
}
