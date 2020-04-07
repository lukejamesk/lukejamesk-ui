import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from '@lukejamesk/core'

const variantToIconVariant = {
  default: 'dark',
  primary: 'light',
  secondary: 'primary',
}

const ButtonIcon = ({ icon, variant, children, ...props }) => {
  return (
    <Button variant={variant} {...props}>
      <Icon variant={variantToIconVariant[variant]} name={icon} />
      {children && <span className="ml-2">{children}</span>}
    </Button>
  )
}

ButtonIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'default']),
  children: PropTypes.node,
}

export default ButtonIcon
