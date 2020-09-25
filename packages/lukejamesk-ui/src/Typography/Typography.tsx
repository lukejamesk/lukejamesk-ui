import React, { forwardRef } from 'react'
import { TypographyVariant, TypographyIntrinsicElements } from './types'

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

export type TypographyProps = React.PropsWithChildren<{
  variant?: TypographyVariant
  className?: string | undefined
}>

export type Ref = any

const findVariant = (variant?: TypographyVariant) => {
  return variant ? typographyVariants[variant] : typographyVariants.paragraph
}

const Typography = forwardRef<Ref, TypographyProps>(({ variant, className, ...other }, ref) => {
  const Component: keyof TypographyIntrinsicElements = findVariant(variant)
  return <Component className={className} {...other} ref={ref} />
})

Typography.displayName = 'Typography'

export default Typography
