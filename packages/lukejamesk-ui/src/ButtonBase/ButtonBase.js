import React from 'react'
import PropTypes from 'prop-types'

const ButtonBase = ({ children, className, element: Element, ...props }) => {
  return (
    <Element type="button" className={className} {...props} tabIndex="0">
      {children}
    </Element>
  )
}

ButtonBase.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  element: PropTypes.string,
}

ButtonBase.defaultProps = {
  element: 'button',
}

export default ButtonBase
