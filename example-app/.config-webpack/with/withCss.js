import { compose } from 'ramda'
import { cssExtractPlugin } from '../plugins'
import { cssLoader } from '../modules'

const withCss = (cssPath) => compose(
  cssExtractPlugin,
  cssLoader(cssPath)
)

export default withCss
