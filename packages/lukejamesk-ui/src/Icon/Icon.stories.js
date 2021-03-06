import React from 'react'
import { text } from '@storybook/addon-knobs'
import { coffee } from '@lukejamesk/icons'
import library from '../library'
import Icon from './Icon'

library.add(coffee)

export default {
  title: 'Core/Icon',
  component: Icon,
}

export const Default = () => <Icon name={text('icon', 'coffee')} variant="primary" size="l" />
