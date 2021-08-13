import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { Typography as TypographyCore } from '@lukejamesk/core'
import { TypographyAlignment, TypographyProps, TypographyRef, TypographyVariant } from './types'

const variantMapping: Record<TypographyVariant, string> = {
  paragraph: 'ljk-typo-p',
  bold: 'ljk-typo-b',
  blockquote: 'ljk-typo-blockquote',
  heading1: 'ljk-typo-h1',
  heading2: 'ljk-typo-h2',
  heading3: 'ljk-typo-h3',
  text: 'ljk-typo-text',
}

const alignMapping: Record<TypographyAlignment, string> = {
  auto: '',
  left: 'ljk-text-left',
  center: 'ljk-text-center',
  right: 'ljk-text-right',
  justify: 'ljk-text-justify',
}

const Typography = forwardRef<TypographyRef, TypographyProps>(
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

export default Typography
