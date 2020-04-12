import React from 'react'
import FormControl from './FormControl'
import { InputBase } from '../InputBase'

export default {
  title: 'Core|Forms/Form Control',
  component: FormControl,
}

export const Default = () => (
  <>
    <FormControl>
      <InputBase name="Input 1" value="Test" />
    </FormControl>
    <FormControl>
      <InputBase name="Input 2" value="Test 2" uncontrolled />
    </FormControl>
    <FormControl>
      <InputBase name="Input 3" value="Test 3" />
    </FormControl>
  </>
)
