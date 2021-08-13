import React, { useState } from 'react'
import NumberInput from './NumberInput'

export default {
  title: 'Design System/Forms/Number Input',
  component: NumberInput,
}

export const Default: React.FC = () => <NumberInput id="TestDefault" name="TestDefault" value="2" />

export const Uncontrolled: React.FC = () => (
  <NumberInput id="TestUncontrolled" name="TestUncontrolled" uncontrolled placeholder="Enter a value" />
)

export const Controlled: React.FC = () => {
  const [value, setValue] = useState('3')
  return <NumberInput id="TestControlled" name="TestControlled" value={value} onChange={setValue} />
}
