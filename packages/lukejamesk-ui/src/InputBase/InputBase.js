import React, { forwardRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { pathOr } from 'ramda'
import { useFormControl } from '../FormControl'

export const inputTypes = ['text', 'number', 'email', 'checkbox', 'radio']

const noop = () => {}

const InputBase = forwardRef(
  ({ type, onChange, onBlur, onFocus, value, uncontrolled, className, ...props }, ref) => {
    const ljkFormControl = useFormControl()
    /* eslint-disable-next-line react/prop-types */
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
      onBlur(val)
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
        className={className}
        {...inputProps}
      />
    )
  },
)

InputBase.displayName = 'Input'

InputBase.propTypes = {
  type: PropTypes.oneOf(inputTypes),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  /* eslint-disable-next-line react/forbid-prop-types */
  value: PropTypes.any,
  uncontrolled: PropTypes.bool,
  className: PropTypes.string,
}

InputBase.defaultProps = {
  type: 'text',
  uncontrolled: false,
  onChange: noop,
  onBlur: noop,
  onFocus: noop,
}

export default InputBase
