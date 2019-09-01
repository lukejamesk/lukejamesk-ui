module.exports = {
  extends: 'airbnb',
  parser: '@typescript-eslint/parser',
  plugins: [
    'babel',
    '@typescript-eslint'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'import/prefer-default-export': 'off'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  }
}
