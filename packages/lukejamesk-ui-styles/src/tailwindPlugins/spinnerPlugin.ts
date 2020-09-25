import plugin from 'tailwindcss/plugin'
import { keys, reduce } from 'ramda'

declare module 'tailwindcss/plugin' {
  type Colors = { [key: string]: { [key: string]: string } }

  type Theme = <T>(path: string) => T
  type AddComponents = (arg: unknown) => void
  type AddUtilities = (arg: unknown) => void

  type PluginType = {
    theme: Theme
    addComponents: AddComponents
    addUtilities: AddUtilities
  }

  type Callback = (tw: PluginType) => void

  export default function(callback: Callback): void
}

type DeepObject = {
  [key: string]: {
    [key: string]: string
  }
}

const spinnerPlugin = plugin(({ addUtilities, addComponents, theme }) => {
  addUtilities({
    '@keyframes rotate': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
  })
  const sizes = theme<DeepObject>('spinner.sizes')
  const colors = theme<DeepObject>('spinner.colors')

  const spinner = {
    '.spinner': {
      position: 'relative',
      display: 'inline-block',
      '&::before': {
        content: `''`,
        boxSizing: 'border-box',
        position: 'absolute',
        borderRadius: '50%',
        top: '0',
        left: '0',
        borderStyle: 'solid',
        animation: 'rotate .7s ease-in-out infinite',
      },
    },
  }

  const spinnerColors = reduce(
    (acc, color) => {
      return {
        ...acc,
        [`.spinner-color-${String(color)}`]: {
          '&::before': {
            borderColor: colors[color].secondary,
            borderTopColor: colors[color].primary,
          },
        },
      }
    },
    {},
    keys(colors),
  )

  const spinnerSizes = reduce(
    (acc, size) => {
      return {
        ...acc,
        [`.spinner-size-${String(size)}`]: {
          width: sizes[size],
          height: sizes[size],
          '&::before': {
            borderWidth: `calc(${String(sizes[size])} / 10)`,
            width: sizes[size],
            height: sizes[size],
          },
        },
      }
    },
    {},
    keys(sizes),
  )

  const spinnerComponents = {
    ...spinner,
    ...spinnerSizes,
    ...spinnerColors,
  }

  addComponents(spinnerComponents)
})

export default spinnerPlugin
