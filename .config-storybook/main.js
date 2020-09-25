require('@babel/register')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  stories: ['../packages/lukejamesk-ui/**/*.stories.js', '../packages/lukejamesk-ui/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
  ],
  webpackFinal: async (config) => {
    config.plugins.push(new MiniCssExtractPlugin())

    config.module.rules.find((rule) => rule.test.toString() === '/\\.css$/').exclude = /\.css$/

    config.module.rules.push({
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.resolve(__dirname, './postcss.config.js'),
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })

    return config
  },
}
