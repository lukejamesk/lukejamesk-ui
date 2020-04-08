import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Button, { buttonVariants } from '../Button'

const variantToIconVariant = {
  default: 'dark',
  primary: 'light',
  secondary: 'primary',
}

export const buttonIconVariants = buttonVariants

const ButtonIcon = ({ icon, variant, children, ...props }) => {
  return (
    <Button variant={variant} {...props}>
      <Icon variant={variantToIconVariant[variant]} name={icon} />
      {children && <span className="ljk-ml-s">{children}</span>}
    </Button>
  )
}

ButtonIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(buttonIconVariants),
  children: PropTypes.node,
}

export default ButtonIcon
