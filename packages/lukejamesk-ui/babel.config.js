const defaultAlias = {
  '@lukejamesk-ui/styles': '../lukejamesk-ui-styles/src'
}

module.exports = {
  extends: '../../babel.config.js',
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      alias: defaultAlias
    }]
  ]
}
