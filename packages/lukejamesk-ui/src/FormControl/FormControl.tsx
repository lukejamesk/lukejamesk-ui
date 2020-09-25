import React, { forwardRef, useState } from 'react'
import { FormControlContext } from './FormControlContext'

type Ref = HTMLDivElement

export type FormControlProps = React.PropsWithChildren<{
  className?: string
}>

const FormControl = forwardRef<Ref, FormControlProps>(({ className, children }, ref) => {
  const [focused, setFocused] = useState(false)

  const childContext: FormControlContext = {
    focused,
    onBlur: () => setFocused(false),
    onFocus: () => setFocused(true),
  }

  return (
    <FormControlContext.Provider value={childContext}>
      <div className={className} ref={ref}>
        {children}
      </div>
    </FormControlContext.Provider>
  )
})

FormControl.displayName = 'FormControl'

export default FormControl
