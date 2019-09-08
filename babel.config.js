module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'entry',
      corejs: '3'
    }],
    '@babel/preset-react'
  ],
  plugins: [['module-resolver', {
    root: ['/src'],
    alias: {
      '@lukejamesk-ui': './packages/lukejamesk-ui/src',
      '@lukejamesk-ui/*': './packages/lukejamesk-ui/*',
      '@lukejamesk-styles': './packages/lukejamesk-styles/src',
      '@lukejamesk-styles/*': './packages/lukejamesk-styles/*'
    }
  }]]
}
