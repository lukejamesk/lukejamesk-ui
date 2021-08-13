import React, { useState } from 'react'
import TextInput from './TextInput'

export default {
  title: 'Design System/Forms/Text Input',
  component: TextInput,
}

export const Default: React.FC = () => <TextInput id="TestDefault" name="TestDefault" value="test" />

export const Uncontrolled: React.FC = () => (
  <TextInput id="TestUncontrolled" name="TestUncontrolled" uncontrolled placeholder="Enter a value" />
)

export const Controlled: React.FC = () => {
  const [value, setValue] = useState('test')
  return <TextInput id="TestControlled" name="TestControlled" value={value} onChange={setValue} />
}
