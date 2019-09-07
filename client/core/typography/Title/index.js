import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const variantMapping = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3'
}

export const Title = forwardRef(
  ({ type = 'heading1', ...other }, ref) => {
    const Component = variantMapping[type]
    return (
      <Component ref={ref} {...other} />)
  }
)

Title.propTypes = {
  type: PropTypes.oneOf(['heading1', 'heading2', 'heading3'])
}
