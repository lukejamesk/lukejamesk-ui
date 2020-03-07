import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { coffee } from '@lukejamesk/icons'
import { library } from '@lukejamesk/core'
import ButtonIcon from './ButtonIcon'

library.add(coffee)

export default {
  title: 'Design System|Button Icon',
}

const variantsKnob = () => select('Variant', ['default', 'primary', 'secondary'], 'default')

export const Default = () => <ButtonIcon variant={variantsKnob()} icon="coffee" />

export const WithText = () => (
  <ButtonIcon variant={variantsKnob()} icon="coffee">
    {text('Text', 'My button')}
  </ButtonIcon>
)
