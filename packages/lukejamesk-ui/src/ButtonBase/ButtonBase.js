import React from 'react'
import PropTypes from 'prop-types'

const ButtonBase = ({ children, className, ...props }) => {
  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  )
}

ButtonBase.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default ButtonBase
