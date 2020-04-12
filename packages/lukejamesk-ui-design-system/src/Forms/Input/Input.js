import React, { forwardRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { path } from 'ramda'
import { InputBase, useFormControl } from '@lukejamesk/core'
import clsx from 'clsx'

const noop = () => {}
export const inputTypes = ['text', 'number']

const Input = forwardRef(({ type, id, name, placeholder, onFocus, onBlur, ...props }, ref) => {
  /* eslint-disable-next-line react/prop-types */
  const { className, ...usedProps } = props

  const [internalFocus, setInternalFocus] = useState(false)
  const ljkFormControl = useFormControl()
  const useInternalFocus = path(['focused'], ljkFormControl) === undefined

  const handleOnBlur = useCallback(
    (...args) => {
      onBlur(...args)
      if (useInternalFocus) {
        setInternalFocus(false)
      }
    },
    [onBlur],
  )

  const handleOnFocus = useCallback(
    (...args) => {
      onFocus(...args)
      if (useInternalFocus) {
        setInternalFocus(true)
      }
    },
    [onFocus],
  )

  return (
    <InputBase
      ref={ref}
      className={clsx('ljk-pb-xs ljk-pt-xs ljk-border-b-2 ljk-border-gray-400 ljk-w-full ljk-outline-none', {
        'ljk-border-primary': useInternalFocus ? internalFocus : ljkFormControl.focused,
      })}
      placeholder={placeholder}
      type={type}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      {...usedProps}
    />
  )
})

Input.displayName = 'Input'

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(inputTypes),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  onFocus: noop,
  onBlur: noop,
}

export default Input
