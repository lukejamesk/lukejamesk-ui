import { toPairs, compose, map, fromPairs } from 'ramda'
import { colors } from 'tailwindcss/defaultTheme'
import defaultTheme from './defaultTheme'
import { spinnerPlugin } from './tailwindPlugins'

const { spacing, breakpoints, palette } = defaultTheme

const tailwindConfig = {
  prefix: 'ljk-',
  variants: {
    margin: ['last'],
    border: ['focus'],
  },
  theme: {
    screens: compose(
      fromPairs,
      map(([key, value]) => [key, `${value}px`]),
      toPairs,
    )(breakpoints),
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      primary: {
        default: palette.primary,
        dark: palette.primaryDark,
      },
      secondary: {
        default: palette.secondary,
        dark: palette.secondaryDark,
      },
    },
    spinner: {
      s: spacing.m,
      m: spacing.l,
      l: spacing.xxl,
      color: palette.primary,
      secondaryColor: '#ccc',
    },
    spacing,
  },
  plugins: [spinnerPlugin],
}

export default tailwindConfig
