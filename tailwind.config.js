module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'body': ['Righteous'],
        'display': ['Lato'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
