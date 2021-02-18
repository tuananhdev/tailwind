module.exports = {
  purge: [
    '../../content/*.htm',
    '../../content/**/*.htm',
    '../../layouts/*.htm',
    '../../pages/*.htm',
    '../../pages/**/*.htm',
    '../../partials/*.htm',
    '../../partials/**/*.htm'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Quicksand', 'sans-serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'section-1': "url('../images/bg-section-1.svg')",
       }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
