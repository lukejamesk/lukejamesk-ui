import { InputBaseProps } from '@lukejamesk/core'

export type CheckboxRef = HTMLInputElement

type CheckboxCustomProps = {
  checked?: boolean
  uncontrolled?: boolean
  onChange?: (value: boolean) => void
}
export type CheckboxProps = CheckboxCustomProps & Omit<InputBaseProps, keyof CheckboxCustomProps | 'value'>
