import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const variantMapping = {
  paragraph: 'p',
  bold: 'strong',
  blockquote: 'blockquote'
}

export const Text = forwardRef(
  ({ type = 'paragraph', ...other }, ref) => {
    const Component = variantMapping[type]
    return (
      <Component ref={ref} {...other} />
    )
  }
)

Text.propTypes = {
  type: PropTypes.oneOf(['paragraph', 'bold', 'blockquote'])
}

Text.defaultProps = {
  type: 'paragraph'
}
