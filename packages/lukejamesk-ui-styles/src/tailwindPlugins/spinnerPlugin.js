import plugin from 'tailwindcss/plugin'
import { keys, reduce } from 'ramda'

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
  const sizes = theme('spinner.sizes')
  const colors = theme('spinner.colors')

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
