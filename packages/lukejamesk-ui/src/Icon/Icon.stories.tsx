import React from 'react'
import { text } from '@storybook/addon-knobs'
import { coffee } from '@lukejamesk/icons'
import library from '../library'
import Icon, { IconName } from './Icon'

library.add(coffee)

export default {
  title: 'Core/Icon',
  component: Icon,
}

const knob = text('icon', 'coffee') as IconName

export const Default: React.FC = () => <Icon name={knob} />
