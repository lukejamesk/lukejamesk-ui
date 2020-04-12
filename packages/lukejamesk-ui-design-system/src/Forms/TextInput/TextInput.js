import React, { forwardRef } from 'react'
import { Input } from '../Input'

const TextInput = forwardRef((props, ref) => <Input ref={ref} {...props} type="text" />)

TextInput.displayName = 'TextInput'

export default TextInput
