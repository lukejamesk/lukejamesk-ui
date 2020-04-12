import React, { useState } from 'react'
import { boolean } from '@storybook/addon-knobs'
import Checkbox from './Checkbox'

export default {
  title: 'Design System|Forms/Checkbox',
  component: Checkbox,
}

export const Default = () => (
  <Checkbox id="TestDefault" name="TestDefault" checked={boolean('Checked', true)} />
)

export const Uncontrolled = () => <Checkbox id="TestDefault" name="TestDefault" uncontrolled checked />
export const Controlled = () => {
  const [checked, setChecked] = useState(false)
  return <Checkbox id="TestDefault" name="TestDefault" checked={checked} onChange={setChecked} />
}
