import React, { ReactNode, FC, forwardRef } from 'react'

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface TitleProps {
  children: ReactNode,
  type?: HeadingType
}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ children, type = 'h1', ...other }, ref) => {
  const Component: any = type
  return (
    <Component ref={ref} {...other}>
      {children}
    </Component>
  )
})
