import React, { forwardRef } from 'react'
import FocusLock from 'react-focus-lock'

type FocusTrapProps = React.PropsWithChildren<{
  disabled: boolean
}>

type Ref = HTMLElement

const FocusTrap = forwardRef<Ref, FocusTrapProps>(({ children, disabled }, ref) => (
  <FocusLock className="focus-lock" ref={ref} disabled={disabled} returnFocus>
    {children}
  </FocusLock>
))

FocusTrap.displayName = 'FocusTrap'

export default FocusTrap
