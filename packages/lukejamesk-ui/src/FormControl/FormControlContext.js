import { useContext, createContext } from 'react'

export const FormControlContext = createContext()

export const useFormControl = () => useContext(FormControlContext)
