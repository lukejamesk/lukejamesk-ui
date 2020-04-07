import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const variantMapping = {
  paragraph: {
    element: 'p',
    class: 'font-normal text-base mb-2',
  },
  bold: {
    element: 'strong',
    class: 'font-semibold text-base mb-2',
  },
  blockquote: {
    element: 'blockquote',
    class: 'p-2 italic border-solid border-l-4 border-blue-500 rounded bg-gray-300 text-base mb-2',
  },
  heading1: {
    element: 'h1',
    class: 'text-3xl font-medium mb-4',
  },
  heading2: {
    element: 'h2',
    class: 'text-2xl font-medium mb-3',
  },
  heading3: {
    element: 'h3',
    class: 'text-xl font-medium mb-2',
  },
  text: {
    element: 'span',
    class: 'font-normal text-base mb-2',
  },
}

const Typography = forwardRef(({ variant = 'text', className, paragraph = false, ...other }, ref) => {
  const v = paragraph ? variantMapping.paragraph : variantMapping[variant]
  const Component = v.element

  return <Component className={clsx(v.class, className, 'last:mb-0')} ref={ref} {...other} />
})

Typography.displayName = 'Typography'

Typography.propTypes = {
  variant: PropTypes.oneOf(['paragraph', 'bold', 'blockquote', 'heading1', 'heading2', 'heading3', 'text']),
  paragraph: PropTypes.bool,
  className: PropTypes.string,
}

export default Typography
