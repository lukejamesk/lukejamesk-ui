import React, { forwardRef } from 'react'
import { Input } from '../Input'

const NumberInput = forwardRef((props, ref) => <Input ref={ref} {...props} type="number" />)
NumberInput.displayName = 'NumberInput'

export default NumberInput
