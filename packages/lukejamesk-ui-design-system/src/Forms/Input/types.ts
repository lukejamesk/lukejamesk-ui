import { InputBaseProps, InputBaseRef } from '@lukejamesk/core'

export type InputType = 'text' | 'number'

export type InputRef = InputBaseRef

type InputCustomProps = {
  type?: InputType
  id: string
  name: string
  placeholder?: string
  onBlur?: (value: string) => void
  onFocus?: () => void
}

export type InputProps = InputCustomProps & Omit<InputBaseProps, keyof InputCustomProps>
