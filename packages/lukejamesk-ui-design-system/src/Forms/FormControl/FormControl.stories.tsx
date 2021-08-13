import React from 'react'
import FormControl from './FormControl'
import { TextInput } from '../TextInput'
import { InputLabel } from '../InputLabel'
import { Checkbox } from '../Checkbox'

export default {
  title: 'Design System/Forms/Form Control',
  component: FormControl,
  subcomponents: {
    InputLabel,
    TextInput,
    Checkbox,
  },
}

export const Default: React.FC = () => (
  <>
    <FormControl>
      <InputLabel for="Input1">Controlled</InputLabel>
      <TextInput id="Input1" name="Input1" value="Value 1" />
    </FormControl>
    <FormControl>
      <InputLabel for="Input2">Uncontrolled</InputLabel>
      <TextInput id="Input2" name="Input2" value="Value 2" uncontrolled />
    </FormControl>
    <FormControl>
      <InputLabel for="Input3" required>
        Uncontrolled
      </InputLabel>
      <TextInput id="Input3" name="Input3" value="Value 3" uncontrolled />
    </FormControl>
    <FormControl>
      <Checkbox id="Input4" name="Input4" checked uncontrolled />
      <InputLabel for="Input4" variant="text">
        Uncontrolled
      </InputLabel>
    </FormControl>
  </>
)
