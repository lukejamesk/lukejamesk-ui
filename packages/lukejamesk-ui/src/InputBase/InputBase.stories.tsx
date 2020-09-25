import React, { useState } from 'react'
import { select } from '@storybook/addon-knobs'
import InputBase, { InputType } from './InputBase'
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types'

export default {
  title: 'Core/Forms/Input Base',
  component: InputBase,
}

export const inputTypes: SelectTypeOptionsProp<InputType> = ['text', 'number', 'email', 'checkbox', 'radio']

const inputTypeKnob = select<InputType>('Type', inputTypes, inputTypes[0])

export const Default = () => <InputBase value="test" />

export const Uncontrolled = () => <InputBase value="test" uncontrolled type={inputTypeKnob} />

export const Controlled = () => {
  const [value, setValue] = useState<string>('test')
  return <InputBase value={value} onChange={setValue} type={inputTypeKnob} />
}
