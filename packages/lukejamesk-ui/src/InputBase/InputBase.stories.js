import React, { useState } from 'react'
import { select } from '@storybook/addon-knobs'
import InputBase, { inputTypes } from './InputBase'

export default {
  title: 'Core|Forms/Input Base',
  component: InputBase,
}

const inputTypeKnob = () => select('Type', inputTypes, inputTypes[0])

export const Default = () => <InputBase value="test" />

export const Uncontrolled = () => <InputBase value="test" uncontrolled type={inputTypeKnob()} />

export const Controlled = () => {
  const [value, setValue] = useState('test')
  return <InputBase value={value} onChange={setValue} type={inputTypeKnob()} />
}
