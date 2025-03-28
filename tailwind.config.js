/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        hyperlegible: ['Atkinson Hyperlegible', 'sans-serif'],
      },
      colors: {
        pragColor: '#4DB6AC'
      }
    },
  },
  plugins: [],
}

