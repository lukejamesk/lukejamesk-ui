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
      sizes: {
        s: spacing.m,
        m: spacing.l,
        l: spacing.xxl,
      },
      colors: {
        primary: {
          primary: palette.primary,
          secondary: '#ccc',
        },
        light: {
          primary: '#ccc',
          secondary: 'rgba(255, 255, 255, .75)',
        },
        dark: {
          primary: '#333',
          secondary: '#ccc',
        },
      },
    },
    spacing,
  },
  plugins: [spinnerPlugin],
}

export default tailwindConfig
