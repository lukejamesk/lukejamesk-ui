export type TypographyIntrinsicElements = Required<
  Pick<
    JSX.IntrinsicElements,
    'p' | 'strong' | 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  >
>

export type TypographyVariant =
  | 'paragraph'
  | 'bold'
  | 'blockquote'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'text'

export type TypographyProps = React.PropsWithChildren<{
  variant?: TypographyVariant
  className?: string | undefined
}>

export type TypographyRef = any
