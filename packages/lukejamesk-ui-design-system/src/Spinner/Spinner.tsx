import React from 'react'
import clsx from 'clsx'
import { SpinnerProps } from './types'

const sizeMapping = {
  s: 'ljk-spinner-size-s',
  m: 'ljk-spinner-size-m',
  l: 'ljk-spinner-size-l',
}

const colorMapping = {
  primary: 'ljk-spinner-color-primary',
  light: 'ljk-spinner-color-light',
  dark: 'ljk-spinner-color-dark',
}

export const spinnerSizes = ['s', 'm', 'l']
export const spinnerColors = ['primary', 'light', 'dark']

const Spinner: React.FC<SpinnerProps> = ({ size = 'm', color = 'primary' }) => (
  <span className={clsx('ljk-spinner', sizeMapping[size], colorMapping[color])} />
)

export default Spinner
