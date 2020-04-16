const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  /* eslint-disable-next-line */
  plugins: [require('postcss-nested'), tailwindcss, autoprefixer],
}
