import React, { useState } from 'react'
import { boolean } from '@storybook/addon-knobs'
import Checkbox from './Checkbox'

export default {
  title: 'Design System/Forms/Checkbox',
  component: Checkbox,
}

export const Default: React.FC = () => (
  <Checkbox id="TestDefault" name="TestDefault" checked={boolean('Checked', true)} />
)

export const Uncontrolled: React.FC = () => (
  <Checkbox id="TestDefault" name="TestDefault" uncontrolled checked />
)
export const Controlled: React.FC = () => {
  const [checked, setChecked] = useState(false)
  return <Checkbox id="TestDefault" name="TestDefault" checked={checked} onChange={setChecked} />
}
