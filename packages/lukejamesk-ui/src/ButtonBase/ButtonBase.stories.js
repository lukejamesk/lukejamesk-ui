import React from 'react'
import { text } from '@storybook/addon-knobs'
import ButtonBase from './ButtonBase'

export default {
  title: 'Core|ButtonBase',
}

export const Default = () => <ButtonBase>{text('text', 'My Button')}</ButtonBase>
