import React from 'react'
import { compose, map, toPairs, reduce } from 'ramda'
import { addDecorator, addParameters } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { defaultTheme } from '@lukejamesk/styles'

import '../packages/lukejamesk-ui-styles/src/css/ui.css'

const convertBreakpoints = compose(
  reduce(
    (acc, current) => ({
      ...current,
      ...acc,
    }),
    {},
  ),
  map(([key, value]) => ({
    [key]: {
      name: key,
      styles: {
        width: `${value}px`,
        height: '750px',
      },
    },
  })),
  toPairs,
)

addParameters({
  viewport: {
    viewports: convertBreakpoints(defaultTheme.breakpoints),
  },
})
addDecorator(withKnobs)
