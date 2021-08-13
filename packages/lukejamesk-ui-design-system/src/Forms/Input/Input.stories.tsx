import React, { useState } from 'react'
import { select } from '@storybook/addon-knobs'
import Input from './Input'
import { InputType } from './types'

const inputTypes: InputType[] = ['text', 'number']

export default {
  title: 'Design System/Forms/Input',
  component: Input,
}

const inputTypeKnob = select('Type', inputTypes, inputTypes[0])

export const Default: React.FC = () => <Input id="TestDefault" name="TestDefault" value="test" />

export const Uncontrolled: React.FC = () => (
  <Input
    id="TestUncontrolled"
    name="TestUncontrolled"
    uncontrolled
    type={inputTypeKnob}
    placeholder="Enter a value"
  />
)

export const Controlled: React.FC = () => {
  const [value, setValue] = useState('test')
  return (
    <Input id="TestControlled" name="TestControlled" value={value} onChange={setValue} type={inputTypeKnob} />
  )
}
