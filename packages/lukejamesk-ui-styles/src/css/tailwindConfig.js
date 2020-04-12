import { toPairs, compose, map, fromPairs } from 'ramda'
import { colors } from 'tailwindcss/defaultTheme'
import defaultTheme from '../defaultTheme'

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
    spacing,
  },
}

export default tailwindConfig
