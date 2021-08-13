import { PropsWithChildren } from 'react'
import { ButtonVariant } from '../Button/types'

export type ButtonLoaderProps = PropsWithChildren<{
  loading?: boolean
  variant?: ButtonVariant
}>
