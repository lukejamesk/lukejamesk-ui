import React, { forwardRef } from 'react'
import { InputLabel } from '../InputLabel'
import { Checkbox } from '../Checkbox'
import { CheckboxRef } from '../Checkbox/types'
import { FormControl } from '../FormControl'
import { CheckboxFieldProps } from './types'

const CheckboxField = forwardRef<CheckboxRef, CheckboxFieldProps>(
  ({ name, required, label, ...props }, ref) => (
    <FormControl>
      <Checkbox id={name} name={name} {...props} ref={ref} />
      {label && (
        <span className="ljk-inline-block ljk-ml-s">
          <InputLabel for={name} variant="text" required={required}>
            {label}
          </InputLabel>
        </span>
      )}
    </FormControl>
  ),
)

CheckboxField.displayName = 'CheckboxField'

export default CheckboxField
