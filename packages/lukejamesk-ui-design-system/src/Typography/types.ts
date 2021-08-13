import {
  TypographyVariant as TypographyVariantCore,
  TypographyProps as TypographyPropsCore,
  TypographyRef as TypographyRefCore,
} from '@lukejamesk/core'

export type TypographyVariant = Extract<
  TypographyVariantCore,
  'paragraph' | 'bold' | 'blockquote' | 'heading1' | 'heading2' | 'heading3' | 'text'
>

export type TypographyAlignment = 'auto' | 'left' | 'center' | 'right' | 'justify'

export type TypographyProps = React.PropsWithChildren<{
  variant?: TypographyVariant
  className?: string
  paragraph?: boolean
  align?: TypographyAlignment
}> &
  TypographyPropsCore

export type TypographyRef = TypographyRefCore
