require('@babel/register')
const path = require('path')

module.exports = {
  stories: ['../**/*.stories.js'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
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
