import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const variantMapping = {
  paragraph: 'p',
  bold: 'strong',
  blockquote: 'blockquote',
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3'
}

const Typography = forwardRef(
  ({ type = 'paragraph', paragraph = false, ...other }, ref) => {
    const Component = paragraph
      ? variantMapping.paragraph
      : variantMapping[type]

    return (
      <Component ref={ref} {...other} />
    )
  }
)

Typography.propTypes = {
  type: PropTypes.oneOf([
    'paragraph',
    'bold',
    'blockquote',
    'heading1',
    'heading2',
    'heading3'
  ]),
  paragraph: PropTypes.bool
}

export default Typography
