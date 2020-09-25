import palette, { Palette } from './palette'
export { Palette } from './palette'
import typography, { Typography } from './typography'
export { Typography } from './typography'
import spacing, { Spacing } from './spacing'
export { Spacing } from './spacing'
import breakpoints, { Breakpoints } from './breakpoints'
export { Breakpoints } from './breakpoints'
import icons, { Icons } from './icons'
export { Icons } from './icons'

export type Theme = {
  palette: Palette
  typography: Typography
  spacing: Spacing
  breakpoints: Breakpoints
  icons: Icons
}

const defaultTheme: Theme = {
  palette,
  typography,
  spacing,
  breakpoints,
  icons,
}

export default defaultTheme
