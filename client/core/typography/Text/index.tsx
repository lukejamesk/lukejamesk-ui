import React, { forwardRef } from 'react'

type TextType = 'p' | 'strong' | 'blockquote'

export interface TextProps {
  children: React.ReactNode,
  type?: TextType
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, type = 'p' }: TextProps, ref) => {
    const Component = type
    return (
      <Component ref={ref}>
        {children}
      </Component>
    )
  }
)
