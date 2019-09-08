import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider, defaultTheme } from '@lukejamesk-styles'
import { CssBaseline } from '@lukejamesk-ui'

const loadStories = () => {
  const req = require.context('../packages/', true, /stories\.js$/)
  req.keys().forEach(req)

  const req2 = require.context('../example-app/', true, /stories\.js$/)
  req2.keys().forEach(req2)
}

addDecorator(withKnobs)
addDecorator(storyFn => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>
        {storyFn()}
      </CssBaseline>
    </ThemeProvider>
  </>
))
configure(loadStories, module)
