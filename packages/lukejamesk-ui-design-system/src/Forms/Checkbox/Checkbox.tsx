import React, { forwardRef, useState, useCallback } from 'react'
import { InputBase, library } from '@lukejamesk/core'
import { check } from '@lukejamesk/icons'
import clsx from 'clsx'
import Icon from '../../Icon'
import { CheckboxProps, CheckboxRef } from './types'

const noop = () => {}

library.add(check)

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(
  ({ checked = false, uncontrolled = false, onChange = noop, ...props }, ref) => {
    const [uncontrolledChecked, setUncontrolledChecked] = useState(checked)

    const handleOnChange = useCallback(
      (val) => {
        if (uncontrolled) {
          setUncontrolledChecked(val)
        }
        onChange(val)
      },
      [onchange],
    )

    return (
      <span className="ljk-inline-block ljk-relative">
        <span
          className={clsx('ljk-w-l ljk-h-l ljk-border-2 ljk-border-gray-800 ljk-flex ljk-rounded', {
            'ljk-bg-secondary': uncontrolled === true ? uncontrolledChecked : checked,
            'ljk-border-secondary': uncontrolled === true ? uncontrolledChecked : checked,
          })}
        >
          <span
            className={clsx('ljk-text-center ljk-inline-block ljk-m-auto ljk-leading-none', {
              'ljk-opacity-0': !(uncontrolled === true ? uncontrolledChecked : checked),
            })}
          >
            <Icon name="check" variant="light" size="s" />
          </span>
        </span>
        <InputBase
          {...props}
          type="checkbox"
          checked={uncontrolled === true ? uncontrolledChecked : checked}
          onChange={handleOnChange}
          className="ljk-opacity-0 ljk-absolute ljk-inset-0 ljk-w-full ljk-h-full"
          ref={ref}
        />
      </span>
    )
  },
)
Checkbox.displayName = 'Checkbox'

export default Checkbox
