import plugin from 'tailwindcss/plugin'

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
  const createSpinner = (name, size, color, secondaryColor) => ({
    [`.spinner-${name}`]: {
      position: 'relative',
      display: 'inline-block',
      width: size,
      height: size,
      '&::before': {
        content: `''`,
        boxSizing: 'border-box',
        position: 'absolute',
        borderRadius: '50%',
        border: `calc(${size} / 10) solid ${secondaryColor}`,
        borderTopColor: color,
        animation: 'rotate .7s ease-in-out infinite',
        width: size,
        height: size,
      },
    },
  })
  const spinnerComponents = {
    ...createSpinner('s', theme('spinner.s'), theme('spinner.color'), theme('spinner.secondaryColor')),
    ...createSpinner('m', theme('spinner.m'), theme('spinner.color'), theme('spinner.secondaryColor')),
    ...createSpinner('l', theme('spinner.l'), theme('spinner.color'), theme('spinner.secondaryColor')),
  }

  addComponents(spinnerComponents)
})

export default spinnerPlugin
