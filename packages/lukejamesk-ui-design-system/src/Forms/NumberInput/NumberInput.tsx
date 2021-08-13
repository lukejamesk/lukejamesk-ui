import React, { forwardRef } from 'react'
import { Input } from '../Input'
import { InputRef } from '../Input/types'
import { NumberInputProps } from './types'

const NumberInput = forwardRef<InputRef, NumberInputProps>((props, ref) => (
  <Input {...props} type="number" ref={ref} />
))

NumberInput.displayName = 'NumberInput'

export default NumberInput
