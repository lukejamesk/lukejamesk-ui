import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { coffee } from '@lukejamesk/icons'
import { library } from '@lukejamesk/core'
import ButtonIcon, { buttonIconVariants } from './ButtonIcon'

library.add(coffee)

export default {
  title: 'Design System|Button Icon',
}

const variantsKnob = () => select('Variant', buttonIconVariants, buttonIconVariants[0])

export const Default = () => <ButtonIcon variant={variantsKnob()} icon="coffee" />

export const WithText = () => (
  <ButtonIcon variant={variantsKnob()} icon="coffee">
    {text('Text', 'My button')}
  </ButtonIcon>
)
