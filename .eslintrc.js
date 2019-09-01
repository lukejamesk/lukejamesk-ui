module.exports = {
  extends: 'airbnb',
  parser: '@typescript-eslint/parser',
  plugins: [
    'babel',
    '@typescript-eslint',
    'jest'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx', '.jsx'] }]
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  settings: {
    'import/extensions': ['.js','.jsx','.ts','.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts','.tsx']
    },
    'import/resolver': {
        'node': {
            'extensions': ['.js','.jsx','.ts','.tsx']
        }
    }
  }
}
