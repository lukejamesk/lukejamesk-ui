import { createLoader } from '../util'

const babelLoader = config => createLoader(config)({
  test: /\.(js)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
})

export default babelLoader
