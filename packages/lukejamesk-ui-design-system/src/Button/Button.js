import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { ButtonBase, Typography } from '@lukejamesk/core'

const variantMapping = {
  default: 'ljk-bg-gray-200 ljk-hover:bg-gray-400',
  primary: 'ljk-bg-primary ljk-hover:primary-dark ljk-text-white',
  secondary: 'ljk-text-primary',
}

export const buttonVariants = ['default', 'primary', 'secondary']

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
