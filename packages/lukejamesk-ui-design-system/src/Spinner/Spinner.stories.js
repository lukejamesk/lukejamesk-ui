import React from 'react'
import { select } from '@storybook/addon-knobs'
import Spinner, { spinnerSizes } from './Spinner'

export default {
  title: 'Design System/Spinner',
  component: Spinner,
}

export const Default = () => <Spinner size={select('Size', spinnerSizes, spinnerSizes[0])} />
