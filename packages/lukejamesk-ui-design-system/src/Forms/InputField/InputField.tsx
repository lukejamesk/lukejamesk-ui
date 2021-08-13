import React, { forwardRef } from 'react'
import { InputLabel } from '../InputLabel'
import { FormControl } from '../FormControl'
import { InputRef } from '../Input/types'
import { InputFieldProps } from './types'
import { TextInput } from '../TextInput'

const InputField = forwardRef<InputRef, InputFieldProps>(
  ({ name, required = false, label = undefined, ...props }, ref) => (
    <FormControl>
      {label && (
        <InputLabel for={name} required={required}>
          {label}
        </InputLabel>
      )}
      <TextInput id={name} name={name} {...props} ref={ref} />
    </FormControl>
  ),
)

InputField.displayName = 'InputField'

export default InputField
