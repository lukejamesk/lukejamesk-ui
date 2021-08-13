import React from 'react'
import { text } from '@storybook/addon-knobs'
import ButtonBase from './ButtonBase'

export default {
  title: 'Core/ButtonBase',
  component: ButtonBase,
}

export const Default = () => (
  <ButtonBase onClick={() => alert('clicked')}>{text('text', 'My Button')}</ButtonBase>
)
