import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {
  ThemeProvider,
  defaultTheme
} from '@lukejamesk-styles'

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <App name="Test app" />
  </ThemeProvider>,
  document.getElementById('app')
)
