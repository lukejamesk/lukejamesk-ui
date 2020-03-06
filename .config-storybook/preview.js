import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider, defaultTheme } from '@lukejamesk-ui/styles'
import { CssBaseline } from '@lukejamesk-ui/core'

addDecorator(withKnobs)
addDecorator((storyFn) => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>{storyFn()}</CssBaseline>
    </ThemeProvider>
  </>
))
