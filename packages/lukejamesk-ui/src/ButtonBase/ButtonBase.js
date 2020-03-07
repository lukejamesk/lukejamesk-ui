import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useStyles } from '@lukejamesk/styles'

const styles = {
  root: {},
}

const ButtonBase = ({ children, className, ...props }) => {
  const classes = useStyles(styles)

  return (
    <button type="button" className={clsx(classes.root, className)} {...props}>
      {children}
    </button>
  )
}

ButtonBase.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default ButtonBase
