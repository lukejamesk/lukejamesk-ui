import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import '../packages/lukejamesk-ui-styles/src/scss/base.scss'

addDecorator(withKnobs)
addDecorator((storyFn) => {
  return <>{storyFn()}</>
})
