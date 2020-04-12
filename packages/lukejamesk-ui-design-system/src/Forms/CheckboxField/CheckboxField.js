import React from 'react'
import PropTypes from 'prop-types'
import { InputLabel } from '../InputLabel'
import { Checkbox } from '../Checkbox'
import { FormControl } from '../FormControl'

const CheckboxField = ({ name, required, label, ...props }) => (
  <FormControl>
    <Checkbox id={name} name={name} {...props} />
    {label && (
      <span className="ljk-inline-block ljk-ml-s">
        <InputLabel for={name} variant="text" required={required}>
          {label}
        </InputLabel>
      </span>
    )}
  </FormControl>
)

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
}

CheckboxField.defaultProps = {
  required: false,
  label: null,
}

export default CheckboxField
