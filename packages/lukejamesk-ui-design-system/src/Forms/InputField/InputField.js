import React from 'react'
import PropTypes from 'prop-types'
import { InputLabel } from '../InputLabel'
import { FormControl } from '../FormControl'
import { Input } from '../Input'
import { NumberInput } from '../NumberInput'
import { TextInput } from '../TextInput'

const InputField = ({ name, required, label, component: Component, ...props }) => (
  <FormControl>
    {label && (
      <InputLabel for={name} required={required}>
        {label}
      </InputLabel>
    )}
    <Component id={name} name={name} {...props} />
  </FormControl>
)

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  component: PropTypes.oneOf([
    PropTypes.instanceOf(TextInput),
    PropTypes.instanceOf(NumberInput),
    PropTypes.instanceOf(Input),
  ]),
}

InputField.defaultProps = {
  required: false,
  label: null,
  component: Input,
}

export default InputField
