import React from 'react'
import { text } from '@storybook/addon-knobs'
import App from './App'

export default {
  title: 'Apps|Example app',
}

export const Default = () => <App name={text('Name', 'Example App')} />
export const Dark = () => <App name={text('Name', 'Example App')} theme="dark" />
