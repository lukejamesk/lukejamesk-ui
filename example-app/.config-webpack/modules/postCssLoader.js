import { createLoader } from '../util'
import path from 'path'

const postCssLoader = (configPath) => config => createLoader(config)({
  test: /\.css$/,
  use: {
    loader: 'postcss-loader',
    options: {
      config: {
        path: path.resolve(__dirname, configPath),
      },
    },
  }
})

export default postCssLoader
