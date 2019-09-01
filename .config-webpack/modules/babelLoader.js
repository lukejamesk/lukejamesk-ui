import { createLoader } from '../util'

const babelLoader = config => createLoader(config)({
  test: /\.(js|jsx)|\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
})

export default babelLoader
