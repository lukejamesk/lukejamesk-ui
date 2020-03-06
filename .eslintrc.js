module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['babel', 'jest', 'prettier'],
  rules: {
    semi: ['error', 'never'],
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
          'test/**',
          'scripts/**',
        ],
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/require-default-props': 'off',
    'prettier/prettier': 'error',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  settings: {
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
      'babel-module': {},
    },
  },
}
