import React from 'react'
import ReactDOM from 'react-dom'
import {
  ThemeProvider,
  defaultTheme
} from '@lukejamesk-ui/styles'
import App from './app'

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <App name="Test app" />
  </ThemeProvider>,
  document.getElementById('app')
)
