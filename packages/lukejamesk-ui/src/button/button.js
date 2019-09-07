import React, { forwardRef } from 'react'

const Button = forwardRef((props, ref) => (
  <button ref={ref} {...props} type="button" />
))

export default Button
