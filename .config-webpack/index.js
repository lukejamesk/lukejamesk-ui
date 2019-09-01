import path from 'path'
import { compose } from 'ramda'
import { babelLoader } from './modules'
import { appHtmlPlugin } from './plugins'

const config = compose(
  appHtmlPlugin,
  babelLoader
)({
  entry: {
    app: './client/index.tsx'
  },
  output: {
    path: path.join(__dirname, '../client-dist'),
    filename: '[name]-[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules'],
    alias: {},
    plugins: []
  }
})

export default config
