import React, { useState } from 'react'
import TextInputField from './TextInputField'

export default {
  title: 'Design System|Forms/Layout/Text Input Field',
  component: TextInputField,
}

export const Default = () => {
  const [value, setValue] = useState('')
  return <TextInputField name="TextInput" label="Example text input" value={value} onChange={setValue} />
}
