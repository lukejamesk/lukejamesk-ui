import HtmlWebPackPlugin from 'html-webpack-plugin'
import { createPlugin } from '../util'

const appHtmlPlugin = config => createPlugin(config)(new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
  inject: true
}))

export default appHtmlPlugin
