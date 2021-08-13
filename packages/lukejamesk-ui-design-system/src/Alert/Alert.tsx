import React from 'react'
import clsx from 'clsx'
import { Typography } from '../Typography'
import { AlertProperties } from './types'

const alertClassMapping = {
  info: 'ljk-bg-blue-200 ljk-border-blue-700',
  success: 'ljk-bg-green-200 ljk-border-green-700',
  error: 'ljk-bg-red-200 ljk-border-red-700',
}

const Alert: React.FC<AlertProperties> = ({ children, variant = 'info' }) => (
  <div className={clsx('ljk-p-m ljk-border ljk-rounded-md', alertClassMapping[variant])}>
    <Typography variant="bold">{children}</Typography>
  </div>
)

export default Alert
