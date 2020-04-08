import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Typography as TypographyCore } from '@lukejamesk/core'

const variantMapping = {
  paragraph: 'ljk-typo-p',
  bold: 'ljk-typo-b',
  blockquote: 'ljk-typo-blockquote',
  heading1: 'ljk-typo-h1',
  heading2: 'ljk-typo-h2',
  heading3: 'ljk-typo-h3',
  text: 'ljk-typo-text',
}

export const typographyVariants = [
  'paragraph',
  'bold',
  'blockquote',
  'heading1',
  'heading2',
  'heading3',
  'text',
]

const Typography = forwardRef(({ variant = 'text', className, paragraph = false, ...other }, ref) => {
  const v = paragraph ? variantMapping.paragraph : variantMapping[variant]

  return <TypographyCore variant={variant} className={clsx(v, className)} ref={ref} {...other} />
})

Typography.displayName = 'Typography'

Typography.propTypes = {
  variant: PropTypes.oneOf(typographyVariants),
  paragraph: PropTypes.bool,
  className: PropTypes.string,
}

export default Typography
