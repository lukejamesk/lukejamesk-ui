import { InputProps } from '../Input/types'
import { TextInputProps } from '../TextInput/types'

export type InputType = 'text' | 'number'

type InputFieldCustomProps = {
  name: string
  required?: boolean
  label?: string
  component?: React.FC<InputProps> | React.FC<TextInputProps>
}

export type InputFieldProps = InputFieldCustomProps & (Omit<InputProps, 'id'> | Omit<TextInputProps, 'id'>)
