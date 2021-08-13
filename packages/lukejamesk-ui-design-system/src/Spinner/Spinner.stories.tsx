import React from 'react'
import { select } from '@storybook/addon-knobs'
import Spinner from './Spinner'
import { SpinnerColor, SpinnerSize } from './types'

const spinnerSizes: SpinnerSize[] = ['s', 'm', 'l']
const spinnerColors: SpinnerColor[] = ['primary', 'light', 'dark']

export default {
  title: 'Design System/Spinner',
  component: Spinner,
}

export const Default: React.FC = () => (
  <Spinner
    size={select('Size', spinnerSizes, spinnerSizes[0])}
    color={select('Color', spinnerColors, spinnerColors[0])}
  />
)
