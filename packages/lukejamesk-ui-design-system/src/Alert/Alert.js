import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Typography } from '../Typography'

const alertClassMapping = {
  info: 'ljk-bg-blue-200 ljk-border-blue-700',
  success: 'ljk-bg-green-200 ljk-border-green-700',
  error: 'ljk-bg-red-200 ljk-border-red-700',
}

export const alertVariants = ['info', 'success', 'error']

const Alert = ({ children, variant }) => (
  <div className={clsx('ljk-p-m ljk-border ljk-rounded-md', alertClassMapping[variant])}>
    <Typography variant="bold">{children}</Typography>
  </div>
)

Alert.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(alertVariants),
}

Alert.defaultProps = {
  variant: 'info',
}

export default Alert
