import React, { forwardRef, useState, useCallback } from 'react'
import { path } from 'ramda'
import { InputBase, useFormControl } from '@lukejamesk/core'
import clsx from 'clsx'
import { InputProps, InputRef } from './types'

const noop = () => {}

const Input = forwardRef<InputRef, InputProps>(
  ({ type = 'text', id, name, placeholder, onFocus = noop, onBlur = noop, ...props }, ref) => {
    const [internalFocus, setInternalFocus] = useState(false)
    const ljkFormControl = useFormControl()
    const useInternalFocus = path(['focused'], ljkFormControl) === undefined

    const handleOnBlur = useCallback(
      (value) => {
        onBlur(value)
        if (useInternalFocus) {
          setInternalFocus(false)
        }
      },
      [onBlur],
    )

    const handleOnFocus = useCallback(() => {
      onFocus()
      if (useInternalFocus) {
        setInternalFocus(true)
      }
    }, [onFocus])

    return (
      <InputBase
        id={id}
        name={name}
        className={clsx(
          'ljk-pb-xs ljk-pt-xs ljk-border-b-2 ljk-border-gray-400 ljk-w-full ljk-outline-none',
          {
            'ljk-border-primary': useInternalFocus ? internalFocus : ljkFormControl.focused,
          },
        )}
        placeholder={placeholder}
        type={type}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...props}
        ref={ref}
      />
    )
  },
)

Input.displayName = 'Input'

export default Input
