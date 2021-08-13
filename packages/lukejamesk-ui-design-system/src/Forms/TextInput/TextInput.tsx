import React, { forwardRef } from 'react'
import { Input } from '../Input'
import { InputRef } from '../Input/types'
import { TextInputProps } from './types'

const TextInput = forwardRef<InputRef, TextInputProps>((props, ref) => (
  <Input {...props} type="text" ref={ref} />
))

TextInput.displayName = 'TextInput'

export default TextInput
