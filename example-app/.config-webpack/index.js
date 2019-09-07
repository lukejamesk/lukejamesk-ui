import path from 'path'
import { compose } from 'ramda'
import { babelLoader } from './modules'
import { appHtmlPlugin } from './plugins'

const config = compose(
  appHtmlPlugin,
  babelLoader
)({
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../.dist-client'),
    filename: '[name]-[chunkhash].js'
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
    alias: {},
    plugins: []
  }
})

export default config
