module.exports = {
  purge: [
    '../js/app.js',
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
        'header': "url('../images/bg-header.svg')",
        'header-sm': "url('../images/bg-header-sm.svg')",
        'section-1': "url('../images/bg-section-1.svg')",
        'section-2': "url('../images/bg-section-2.svg')",
        'section-3': "url('../images/bg-section-3.svg')",
        'section-left': "url('../images/bg-section-left.svg')",
        'section-right': "url('../images/bg-section-right.svg')",
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
