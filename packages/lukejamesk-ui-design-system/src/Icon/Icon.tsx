import React from 'react'
import clsx from 'clsx'
import { Icon as IconCore } from '@lukejamesk/core'
import { IconColor, IconProps, IconSize } from './types'

const variantMappiping: Record<IconColor, string> = {
  light: 'ljk-text-white',
  dark: 'ljk-text-black',
  primary: 'ljk-text-primary',
  secondary: 'ljk-text-secondary',
}

const sizeMapping: Record<IconSize, string> = {
  s: 'ljk-text-sm',
  m: 'ljk-text-base',
  l: 'ljk-text-4xl',
  auto: '',
}

const Icon: React.FC<IconProps> = ({ name, variant = 'dark', size = 'auto' }) => {
  return (
    <span className={clsx(variantMappiping[variant], sizeMapping[size])}>
      <IconCore name={name} className="ljk-fill-current" />
    </span>
  )
}

export default Icon
