import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@lukejamesk/styles'
import { Button, Icon } from '@lukejamesk/core'

const styles = (theme) => ({
  text: {
    marginLeft: theme.spacing.xs,
  },
})

const variantToIconVariant = {
  default: 'dark',
  primary: 'light',
  secondary: 'primary',
}

const ButtonIcon = ({ icon, variant, children, ...props }) => {
  const classes = useStyles(styles)

  return (
    <Button variant={variant} {...props}>
      <Icon variant={variantToIconVariant[variant]} name={icon} />
      {children && <span className={classes.text}>{children}</span>}
    </Button>
  )
}

ButtonIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'default']),
  children: PropTypes.node,
}

export default ButtonIcon
