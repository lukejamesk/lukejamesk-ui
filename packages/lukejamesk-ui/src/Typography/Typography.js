import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const variantMapping = {
  paragraph: 'p',
  bold: 'strong',
  blockquote: 'blockquote',
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  heading6: 'h6',
  text: 'span',
}

const Typography = forwardRef(({ variant = 'text', className, paragraph = false, ...other }, ref) => {
  const v = paragraph ? variantMapping.paragraph : variantMapping[variant]
  const Component = v

  return <Component className={className} ref={ref} {...other} />
})

Typography.displayName = 'Typography'

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'paragraph',
    'bold',
    'blockquote',
    'heading1',
    'heading2',
    'heading3',
    'heading4',
    'heading5',
    'heading6',
    'text',
  ]),
  paragraph: PropTypes.bool,
  className: PropTypes.string,
}

export default Typography
