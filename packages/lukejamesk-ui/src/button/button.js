import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useStyles } from '@lukejamesk-styles'
import Typography from '../typography'

const styles = theme => ({
  button: {
    boxSizing: 'border-box',
    background: '#eee',
    border: 'none',
    padding: theme.spacing.s,
    textTransform: 'uppercase',
    fontWeight: theme.typography.button.fontWeight,
    fontSize: theme.typography.button.fontSize,
    borderRadius: 5
  },
  primary: {
    background: theme.palette.primary,
    color: '#fff'
  },
  secondary: {
    background: 'transparent',
    color: theme.palette.primary
  }
})

const Button = forwardRef((({
  variant,
  children,
  ...props
}, ref) => {
  const classes = useStyles(styles)

  return (
    <button
      className={clsx(
        classes.button,
        classes[variant]
      )}
      ref={ref}
      {...props}
      type="button"
    >
      <Typography>{children}</Typography>
    </button>
  )
}))

Button.displayName = 'Button'

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary'])
}

export default Button
