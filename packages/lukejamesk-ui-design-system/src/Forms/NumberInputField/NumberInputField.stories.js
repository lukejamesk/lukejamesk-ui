import React, { useState } from 'react'
import NumberInputField from './NumberInputField'

export default {
  title: 'Design System/Forms/Layout/Number Input Field',
  component: NumberInputField,
}

export const Default = () => {
  const [value, setValue] = useState()
  return (
    <NumberInputField name="NumberInput" label="Example number input" value={value} onChange={setValue} />
  )
}
