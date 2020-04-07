import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import ButtonBase from '../ButtonBase'
import Typography from '../Typography'

const variantMapping = {
  default: 'bg-gray-200 hover:bg-gray-400',
  primary: 'bg-blue-500 hover:bg-blue-700 text-white',
  secondary: 'text-blue-500',
}

const Button = forwardRef(({ variant, children, className, ...props }, ref) => {
  const v = variant || 'default'
  return (
    <ButtonBase
      className={clsx(variantMapping[v], 'p-2 rounded uppercase text-base')}
      ref={ref}
      {...props}
      type="button"
    >
      <Typography>{children}</Typography>
    </ButtonBase>
  )
})

Button.displayName = 'Button'

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

export default Button
