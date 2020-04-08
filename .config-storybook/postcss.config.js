const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const path = require('path')

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    path.resolve(__dirname, '../packages/**/*.js'),
    path.resolve(__dirname, '../example-app/**/*.js'),
  ],
})

module.exports = {
  plugins: [
    // require('postcss-import'),
    require('postcss-nested'),
    tailwindcss(path.resolve(__dirname, './tailwind.config.js')),
    autoprefixer,
    // purgecss,
  ],
}
