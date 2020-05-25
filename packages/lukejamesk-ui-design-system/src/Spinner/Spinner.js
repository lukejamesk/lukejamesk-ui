import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

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

const Spinner = ({ size, color }) => (
  <span className={clsx('ljk-spinner', sizeMapping[size], colorMapping[color])} />
)

Spinner.propTypes = {
  size: PropTypes.oneOf(spinnerSizes),
  color: PropTypes.oneOf(spinnerColors),
}
Spinner.defaultProps = {
  size: 'm',
  color: 'primary',
}

export default Spinner
