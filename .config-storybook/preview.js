import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import '../packages/lukejamesk-ui-styles/src/css/ui.css'

addDecorator(withKnobs)
addDecorator((story) => {
  document.querySelector('html').style.fontSize = text('Base font size', '14px')
  return story()
})
addDecorator((storyFn) => {
  return <>{storyFn()}</>
})
