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
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.storybook/**',
          'packages/**/*.stories.js',
          'packages/**/*.test.js',
          'example-app/**/*.stories.js',
          'example-app/**/*.test.js',
          'test/**'
        ]
      }
    ],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }],
    'react/require-default-props': 'off',
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
        },
        'babel-module': {}
    }
  }
}
