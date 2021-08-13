import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { coffee } from '@lukejamesk/icons'
import { library } from '@lukejamesk/core'
import ButtonIcon from './ButtonIcon'
import { ButtonVariant } from '../Button/types'

const buttonVariants: ButtonVariant[] = ['default', 'primary', 'secondary', 'danger']

library.add(coffee)

export default {
  title: 'Design System/Button Icon',
  component: ButtonIcon,
}

const variantsKnob = () => select('Variant', buttonVariants, buttonVariants[0])

export const Default: React.FC = () => <ButtonIcon variant={variantsKnob()} icon="coffee" />

export const WithText: React.FC = () => (
  <ButtonIcon variant={variantsKnob()} icon="coffee">
    {text('Text', 'My button')}
  </ButtonIcon>
)
