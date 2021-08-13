import { compose } from 'ramda'
import { appHtmlPlugin } from '../plugins'

const withAppHtml = compose(
  appHtmlPlugin
)

export default withAppHtml
