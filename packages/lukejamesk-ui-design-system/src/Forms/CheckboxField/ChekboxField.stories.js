import React, { useState } from 'react'
import CheckboxField from './CheckboxField'

export default {
  title: 'Design System/Forms/Layout/Checkbox Field',
  component: CheckboxField,
}

export const Default = () => {
  const [checked, setChecked] = useState(false)
  return (
    <CheckboxField name="Checkbox" label="Example checkbox field" checked={checked} onChange={setChecked} />
  )
}
