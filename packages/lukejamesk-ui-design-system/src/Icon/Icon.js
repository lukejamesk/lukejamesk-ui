import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Icon as IconCore } from '@lukejamesk/core'

const variantMappiping = {
  light: 'ljk-text-white',
  dark: 'ljk-text-black',
  primary: 'ljk-text-primary',
  secondary: 'ljk-text-secondary',
}

const sizeMapping = {
  s: 'ljk-text-sm',
  m: 'ljk-text-base',
  l: 'ljk-text-4xl',
  auto: '',
}

export const iconVariants = ['dark', 'light', 'primary', 'secondary']
export const iconSizes = ['s', 'm', 'l']

const Icon = ({ name, variant = 'dark', size = 'auto' }) => {
  return (
    <span className={clsx(variantMappiping[variant], sizeMapping[size])}>
      <IconCore name={name} className="ljk-fill-current" />
    </span>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(iconVariants),
  size: PropTypes.oneOf(iconSizes),
}

export default Icon
