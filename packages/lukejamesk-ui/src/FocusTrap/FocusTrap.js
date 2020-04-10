import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import FocusLock from 'react-focus-lock'

const FocusTrap = forwardRef(({ children, disabled }, ref) => (
  <FocusLock className="focus-lock" ref={ref} disabled={disabled} returnFocus>
    {children}
  </FocusLock>
))

FocusTrap.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
}

FocusTrap.defaultProps = {
  children: null,
  disabled: false,
}

FocusTrap.displayName = 'FocusTrap'

export default FocusTrap
