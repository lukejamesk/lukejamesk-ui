import { ButtonBaseProps, ButtonBaseRef } from '@lukejamesk/core'

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'danger'

export type ButtonRef = ButtonBaseRef

export type ButtonProps = {
  variant?: ButtonVariant
} & ButtonBaseProps
