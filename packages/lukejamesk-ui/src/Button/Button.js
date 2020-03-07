import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useStyles } from '@lukejamesk/styles'
import ButtonBase from '../ButtonBase'
import Typography from '../Typography'

const styles = (theme) => ({
  root: {
    boxSizing: 'border-box',
    background: theme.palette.light,
    border: 'none',
    padding: theme.spacing.s,
    textTransform: 'uppercase',
    fontWeight: theme.typography.button.fontWeight,
    fontSize: theme.typography.button.fontSize,
    borderRadius: 5,
  },
  primary: {
    background: theme.palette.primary,
    color: '#fff',
  },
  secondary: {
    background: 'transparent',
    color: theme.palette.primary,
  },
})

const Button = forwardRef(({ variant, children, className, ...props }, ref) => {
  const classes = useStyles(styles)

  return (
    <ButtonBase
      className={clsx(classes.root, classes[variant], className)}
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
