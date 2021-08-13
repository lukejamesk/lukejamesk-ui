export type InputBaseRef = HTMLInputElement

export type InputType = 'text' | 'number' | 'email' | 'checkbox' | 'radio'

export type InputBaseCheckboxProps = { checked?: boolean }

type InputBaseCustomProps = {
  type?: InputType
  onChange?: (value: string) => unknown
  onBlur?: (value: string) => unknown
  onFocus?: () => unknown
  value?: string
  uncontrolled?: boolean
  className?: string
}

export type InputBaseProps = InputBaseCustomProps &
  Omit<React.HTMLAttributes<InputBaseRef>, keyof InputBaseCustomProps> &
  Omit<React.HTMLProps<InputBaseRef>, keyof InputBaseCustomProps>
