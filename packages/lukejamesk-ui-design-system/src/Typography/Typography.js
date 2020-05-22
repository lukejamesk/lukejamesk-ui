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

const alignMapping = {
  auto: '',
  left: 'ljk-text-left',
  center: 'ljk-text-center',
  right: 'ljk-text-right',
  justify: 'ljk-text-justify',
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

export const typographyAlignments = ['auto', 'left', 'center', 'right', 'justify']

const Typography = forwardRef(
  ({ variant = 'text', className, paragraph = false, align = 'auto', ...other }, ref) => {
    const vMapped = paragraph ? 'paragraph' : variant

    return (
      <TypographyCore
        variant={vMapped}
        className={clsx(variantMapping[vMapped], alignMapping[align], className)}
        ref={ref}
        {...other}
      />
    )
  },
)

Typography.displayName = 'Typography'

Typography.propTypes = {
  variant: PropTypes.oneOf(typographyVariants),
  paragraph: PropTypes.bool,
  className: PropTypes.string,
  align: PropTypes.oneOf(typographyAlignments),
}

export default Typography
