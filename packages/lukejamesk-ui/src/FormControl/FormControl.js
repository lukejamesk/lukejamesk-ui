import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import { FormControlContext } from './FormControlContext'

const FormControl = forwardRef(({ className, children }, ref) => {
  const [focused, setFocused] = useState()

  const childContext = {
    focused,
    onBlur: () => setFocused(false),
    onFocus: () => setFocused(true),
  }

  return (
    <FormControlContext.Provider value={childContext}>
      <div className={className} ref={ref}>
        {children}
      </div>
    </FormControlContext.Provider>
  )
})

FormControl.displayName = 'FormControl'

FormControl.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default FormControl
