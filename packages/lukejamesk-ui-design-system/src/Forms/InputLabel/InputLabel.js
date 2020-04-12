import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useFormControl } from '@lukejamesk/core'
import clsx from 'clsx'

export const inputLabelVariants = ['label', 'text']

const InputLabel = forwardRef(({ required, for: htmlFor, variant, children }, ref) => {
  const ljkFormControl = useFormControl()
  return (
    /* eslint-disable-next-line jsx-a11y/label-has-for */
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={clsx({
        'ljk-text-gray-400': variant === 'label',
        'ljk-text-sm': variant === 'label',
        'ljk-text-primary': ljkFormControl && ljkFormControl.focused && variant !== 'text',
      })}
    >
      {children}
      {required && <span className="ljk-text-red-600">&nbsp;*</span>}
    </label>
  )
})

InputLabel.propTypes = {
  required: PropTypes.bool,
  for: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(inputLabelVariants),
  children: PropTypes.node,
}

InputLabel.defaultProps = {
  variant: inputLabelVariants[0],
}

export default InputLabel
