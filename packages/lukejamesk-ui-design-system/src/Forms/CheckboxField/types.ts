import { CheckboxProps } from '../Checkbox/types'

type CheckboxFieldCustomProps = {
  name: string
  required?: boolean
  label?: string
}

export type CheckboxFieldProps = CheckboxFieldCustomProps &
  Omit<CheckboxProps, keyof CheckboxFieldCustomProps>
