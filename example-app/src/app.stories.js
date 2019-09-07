import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import App from './app'

storiesOf('Apps', module)
  .add('Example App', () => (
    <App name={text('Name', 'Example App')} />
  ))
