import { toPairs, compose, map, fromPairs, KeyValuePair } from 'ramda'
import { colors } from 'tailwindcss/defaultTheme'
import defaultTheme, { Breakpoints } from './defaultTheme'
import { spinnerPlugin } from './tailwindPlugins'

const { spacing, breakpoints, palette } = defaultTheme

const pairToPixels = map<KeyValuePair<string, number>, KeyValuePair<string, string>>(
  ([key, value]: [string, number]) => [key, `${value}px`],
)

const toScreenSizes = compose<
  Breakpoints,
  KeyValuePair<string, number>[],
  KeyValuePair<string, string>[],
  { [key: string]: string }
>(fromPairs, pairToPixels, toPairs)

const screens = toScreenSizes(breakpoints)

const tailwindConfig = {
  prefix: 'ljk-',
  variants: {
    margin: ['last'],
    border: ['focus'],
  },
  theme: {
    screens,
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
