import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { ButtonBase, Typography } from '@lukejamesk/core'

const variantMapping = {
  default: '',
  primary: 'ljk-bg-primary ljk-hover:primary-dark ljk-text-white',
  secondary: 'ljk-text-primary',
  danger: 'ljk-bg-red-600 ljk-text-white',
}

export const buttonVariants = ['default', 'primary', 'secondary', 'danger']

const Button = forwardRef(({ variant, children, className, ...props }, ref) => {
  const v = variant || 'default'
  return (
    <ButtonBase
      className={clsx(variantMapping[v], 'ljk-p-xs ljk-rounded ljk-uppercase ljk-text-base')}
      ref={ref}
      {...props}
    >
      <Typography>{children}</Typography>
    </ButtonBase>
  )
})

Button.displayName = 'Button'

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(buttonVariants),
}

export default Button
