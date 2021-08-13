import React, { forwardRef } from 'react'
import { useFormControl } from '@lukejamesk/core'
import clsx from 'clsx'
import { LabelProps, LabelRef } from './types'

const InputLabel = forwardRef<LabelRef, LabelProps>(
  ({ required = false, for: htmlFor, variant = 'label', children }, ref) => {
    const ljkFormControl = useFormControl()
    return (
      <label
        htmlFor={htmlFor}
        className={clsx({
          'ljk-text-gray-400': variant === 'label',
          'ljk-text-sm': variant === 'label',
          'ljk-text-primary': ljkFormControl && ljkFormControl.focused && variant !== 'text',
        })}
        ref={ref}
      >
        {children}
        {required && <span className="ljk-text-red-600">&nbsp;*</span>}
      </label>
    )
  },
)

InputLabel.displayName = 'InputLabel'

export default InputLabel
