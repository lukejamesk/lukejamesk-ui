import { useContext, createContext } from 'react'

export type FormControlContext = {
  focused: boolean
  onBlur: () => unknown
  onFocus: () => unknown
}

export const FormControlContext = createContext<FormControlContext>({} as FormControlContext)

export const useFormControl = (): FormControlContext => useContext<FormControlContext>(FormControlContext)
