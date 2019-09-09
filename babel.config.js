const defaultAlias = {
  '@lukejamesk-ui/core': './packages/lukejamesk-ui/src',
  '@lukejamesk-ui/styles': './packages/lukejamesk-ui-styles/src'
}

module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'entry',
      corejs: '3'
    }],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-react-constant-elements',
    ['module-resolver', {
      root: ['./'],
      alias: defaultAlias
    }]
  ]
}
