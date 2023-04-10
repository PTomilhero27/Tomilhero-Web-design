module.exports = {
  mode: 'jit',
  prefix: 'tw-',
  purge: [
    './src/**/*.{html,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
    },
    colors: {
      primary: '#6F2BB8',
      white: '#fefefe',
      text: 'rgb(107 114 128)'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


