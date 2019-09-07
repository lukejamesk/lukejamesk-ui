module.exports = {
  extends: 'airbnb',
  plugins: [
    'babel',
    'jest'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }]
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  settings: {
    'import/extensions': ['.js'],
    'import/resolver': {
        'node': {
            'extensions': ['.js']
        }
    }
  }
}
