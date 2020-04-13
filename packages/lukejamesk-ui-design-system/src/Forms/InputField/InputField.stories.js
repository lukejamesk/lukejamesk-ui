import React, { useState } from 'react'
import InputField from './InputField'

export default {
  title: 'Design System/Forms/Layout/Input Field',
  component: InputField,
}

export const Default = () => {
  const [value, setValue] = useState('')
  return <InputField name="TextInput" label="Example text input" value={value} onChange={setValue} />
}
