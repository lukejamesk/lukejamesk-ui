import React, { forwardRef } from 'react'
import { TypographyVariant, TypographyIntrinsicElements, TypographyProps, TypographyRef } from './types'

export const typographyVariants: Record<TypographyVariant, keyof TypographyIntrinsicElements> = {
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

const findVariant = (variant?: TypographyVariant) => {
  return variant ? typographyVariants[variant] : typographyVariants.paragraph
}

const Typography = forwardRef<TypographyRef, TypographyProps>(({ variant, className, ...other }, ref) => {
  const Component: keyof TypographyIntrinsicElements = findVariant(variant)
  return <Component className={className} {...other} ref={ref} />
})

Typography.displayName = 'Typography'

export default Typography
