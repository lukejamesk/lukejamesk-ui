module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  rules: {
    semi: ['error', 'never'],
    // 'import/prefer-default-export': 'off',
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: [
    //       '.storybook/**',
    //       'packages/**/*.stories.js',
    //       'packages/**/*.test.js',
    //       'example-app/**/*.stories.js',
    //       'example-app/**/*.test.js',
    //       'test/**',
    //       'scripts/**',
    //     ],
    //   },
    // ],
    // 'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
    // 'react/require-default-props': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'prettier/prettier': 'error',
    'react/prop-types': 'off'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  // settings: {
  //   'import/extensions': ['.js', '.ts', '.tsx'],
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js'],
  //     },
  //     'babel-module': {},
  //   },
  // },
}
