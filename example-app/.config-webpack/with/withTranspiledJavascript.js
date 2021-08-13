import { compose } from 'ramda'
import { babelLoader, tsLoader } from '../modules'

const withTranspiledJavascript = compose(
  babelLoader,
  tsLoader,
)

export default withTranspiledJavascript
