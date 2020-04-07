import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const variantMappiping = {
  light: 'text-white',
  dark: 'text-black',
  primary: 'text-blue-500',
  secondary: 'text-green-500',
}

const sizeMapping = {
  s: 'text-sm',
  m: 'text-base',
  l: 'text-4xl',
  auto: '',
}

const Icon = ({ name, variant = 'dark', size = 'auto' }) => {
  return (
    <span className={clsx(variantMappiping[variant], sizeMapping[size])}>
      <FontAwesomeIcon icon={name} className="fill-current" />
    </span>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']),
  size: PropTypes.oneOf(['s', 'm', 'l', 'auto']),
}
export default Icon
