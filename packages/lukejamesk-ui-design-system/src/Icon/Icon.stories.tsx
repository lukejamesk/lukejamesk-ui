import React from 'react'
import { select } from '@storybook/addon-knobs'
import { coffee } from '@lukejamesk/icons'
import Icon from './Icon'
import { IconSize, IconColor } from './types'
import { library } from '@lukejamesk/core'

library.add(coffee)

export const iconSizes: IconSize[] = ['s', 'm', 'l']
export const iconVariants: IconColor[] = ['dark', 'light', 'primary', 'secondary']

export default {
  title: 'Design System/Icon',
  component: Icon,
}

export const Default: React.FC = () => (
  <Icon
    name="coffee"
    variant={select('Variant', iconVariants, iconVariants[0])}
    size={select('Size', iconSizes, iconSizes[0])}
  />
)
