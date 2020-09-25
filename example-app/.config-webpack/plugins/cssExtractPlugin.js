import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { createPlugin } from '../util'

const cssExtractPlugin = config => createPlugin(config)(new MiniCssExtractPlugin())

export default cssExtractPlugin
