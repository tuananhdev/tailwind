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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
