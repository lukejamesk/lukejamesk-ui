import path from 'path'
import { compose } from 'ramda'
import { withCss, withTranspiledJavascript, withAppHtml } from './with'

const config = compose(
  withAppHtml,
  withCss('../../postcss.config.js'),
  withTranspiledJavascript,
)({
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name]-[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts', '.css'],
    modules: ['node_modules'],
    alias: {},
    plugins: []
  }
})

export default config
