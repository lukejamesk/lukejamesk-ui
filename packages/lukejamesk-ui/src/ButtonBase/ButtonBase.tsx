import React, { forwardRef } from 'react'
import { ButtonBaseProps, ButtonBaseRef } from './types'

const ButtonBase = forwardRef<ButtonBaseRef, ButtonBaseProps>(
  ({ children, className, element: Element = 'button', ...props }, ref) => {
    return (
      <Element type="button" className={className} tabIndex={0} {...props} ref={ref}>
        {children}
      </Element>
    )
  },
)

ButtonBase.displayName = 'ButtonBase'

export default ButtonBase
