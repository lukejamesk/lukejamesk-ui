const defaultAlias = {
  '@lukejamesk-ui/core': '../packages/lukejamesk-ui/src',
  '@lukejamesk-ui/styles': '../packages/lukejamesk-ui-styles/src'
}

module.exports = {
  extends: '../babel.config.js',
  plugins: [
    ['module-resolver', {
      root: ['./'],
      alias: defaultAlias
    }]
  ]
}
