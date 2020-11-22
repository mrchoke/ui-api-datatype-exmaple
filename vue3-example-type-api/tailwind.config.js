// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
    options: {
      safelist: ['bg-info', 'bg-success', 'bg-warning', 'bg-error']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ['Prompt'],
      serif: ['Prompt'],
      display: ['Prompt'],
      body: ['Prompt']
    },
    colors: {
      ...colors,
      info: colors.cyan[500],
      success: colors.green[500],
      error: colors.red[500],
      warning: colors.orange[500]
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addComponents }) {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          margin: '.05rem .2rem'
        },
        '.btn-primary': {
          backgroundColor: colors.blueGray[600],
          color: colors.white,
          '&:hover': {
            backgroundColor: colors.gray[600]
          }
        },
        '.btn-secondary': {
          backgroundColor: colors.blue[600],
          color: colors.white,
          '&:hover': {
            backgroundColor: colors.blue[400]
          }
        },
        '.btn-error': {
          backgroundColor: colors.red[500],
          color: colors.white,
          '&:hover': {
            backgroundColor: colors.red[600]
          }
        },
        '.btn-info': {
          backgroundColor: colors.cyan[500],
          color: colors.white,
          '&:hover': {
            backgroundColor: colors.cyan[600]
          }
        },
        '.btn-success': {
          backgroundColor: colors.green[500],
          color: colors.white,
          '&:hover': {
            backgroundColor: colors.green[600]
          }
        },
        '.btn-warning': {
          backgroundColor: colors.orange[500],
          color: colors.white,
          '&:hover': {
            backgroundColor: colors.orange[600]
          }
        }
      }

      addComponents(buttons)
    }
  ]
}
