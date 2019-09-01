import React, { ReactNode, forwardRef } from 'react'

type TextType = 'p' | 'strong' | 'blockquote'

export interface TextProps {
  children: ReactNode,
  type?: TextType
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, type = 'p' }, ref) => {
    const Component = type
    return (
      <Component ref={ref}>
        {children}
      </Component>
    )
  }
)
