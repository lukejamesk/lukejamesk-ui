import React, { forwardRef, useState, useCallback } from 'react'
import clsx from 'clsx'
import { pathOr } from 'ramda'
import { useFormControl } from '../FormControl'
import { InputBaseProps, InputBaseRef } from './types'

const noop = () => {}

const InputBase = forwardRef<InputBaseRef, InputBaseProps>(
  (
    {
      type = 'text',
      onChange = noop,
      onBlur = noop,
      onFocus = noop,
      value,
      uncontrolled = false,
      className,
      ...props
    },
    ref,
  ) => {
    const ljkFormControl = useFormControl()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { defaultValue, defaultChecked, checked, ...usedProps } = props
    const [val, setVal] = useState(value)

    const InputComponent = 'input'
    let inputProps

    if (type === 'checkbox') {
      inputProps = uncontrolled
        ? {
            type,
            defaultChecked: checked,
            ...usedProps,
          }
        : {
            type,
            checked,
            ...usedProps,
          }
    } else {
      inputProps = uncontrolled
        ? {
            type,
            defaultValue: val,
            ...usedProps,
          }
        : {
            type,
            value,
            ...usedProps,
          }
    }

    const handleOnChange = useCallback(
      (event) => {
        if (type === 'checkbox') {
          onChange(event.target.checked)
          setVal(event.target.checked)
        } else {
          onChange(event.target.value)
          setVal(event.target.value)
        }
      },
      [onChange],
    )

    const handleOnBlur = useCallback(() => {
      onBlur(val || '')
      if (ljkFormControl) {
        ljkFormControl.onBlur()
      }
    }, [onBlur, val, pathOr(noop, ['onBlur'], ljkFormControl)])

    const handleOnFocus = useCallback(() => {
      onFocus()
      if (ljkFormControl) {
        ljkFormControl.onFocus()
      }
    }, [onFocus, pathOr(noop, ['onFocus'], ljkFormControl)])

    return (
      <InputComponent
        ref={ref}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        className={clsx('ljk-outline-none', className)}
        {...inputProps}
      />
    )
  },
)

InputBase.displayName = 'InputBase'

export default InputBase
