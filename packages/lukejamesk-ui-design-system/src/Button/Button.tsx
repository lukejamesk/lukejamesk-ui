import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { ButtonBase, Typography } from '@lukejamesk/core'
import { ButtonProps, ButtonRef, ButtonVariant } from './types'

const variantMapping: Record<ButtonVariant, string> = {
  default: '',
  primary: 'ljk-bg-primary ljk-hover:primary-dark ljk-text-white',
  secondary: 'ljk-text-primary',
  danger: 'ljk-bg-red-600 ljk-text-white',
}

const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ variant = 'default', children, className, ...props }, ref) => {
    return (
      <ButtonBase
        className={clsx(
          variantMapping[variant],
          className,
          'ljk-p-xs ljk-rounded ljk-uppercase ljk-text-base',
        )}
        {...props}
        ref={ref}
      >
        <Typography>{children}</Typography>
      </ButtonBase>
    )
  },
)

Button.displayName = 'Button'

export default Button
