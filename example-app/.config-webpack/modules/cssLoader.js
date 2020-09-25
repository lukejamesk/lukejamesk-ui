import { createLoader } from '../util'
import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const cssLoader = (configPath) => config => createLoader(config)({
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
          path: path.resolve(__dirname, configPath),
        },
      },
    },
  ],
  include: path.resolve(__dirname, '../../../'),
})

export default cssLoader
