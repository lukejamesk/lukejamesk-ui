import React, { useState } from 'react'
import NumberInput from './NumberInput'

export default {
  title: 'Design System|Forms/Number Input',
  component: NumberInput,
}

export const Default = () => <NumberInput id="TestDefault" name="TestDefault" value="2" />

export const Uncontrolled = () => (
  <NumberInput id="TestUncontrolled" name="TestUncontrolled" uncontrolled placeholder="Enter a value" />
)

export const Controlled = () => {
  const [value, setValue] = useState(3)
  return <NumberInput id="TestControlled" name="TestControlled" value={value} onChange={setValue} />
}
