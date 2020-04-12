import React, { forwardRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { InputBase, library } from '@lukejamesk/core'
import { check } from '@lukejamesk/icons'
import clsx from 'clsx'
import Icon from '../../Icon'

const noop = () => {}

library.add(check)

const Checkbox = forwardRef(({ checked, uncontrolled, onChange, ...props }, ref) => {
  /* eslint-disable-next-line react/prop-types */
  const { value, ...usedProps } = props
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
        ref={ref}
        type="checkbox"
        checked={uncontrolled === true ? uncontrolledChecked : checked}
        onChange={handleOnChange}
        className="ljk-opacity-0 ljk-absolute ljk-inset-0 ljk-w-full ljk-h-full"
        {...usedProps}
      />
    </span>
  )
})

Checkbox.propTypes = {
  uncontrolled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
}

Checkbox.defaultProps = {
  uncontrolled: false,
  onChange: noop,
  checked: false,
}

export default Checkbox
