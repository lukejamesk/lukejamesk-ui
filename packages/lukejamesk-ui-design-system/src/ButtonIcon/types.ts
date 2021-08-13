import { IconName } from '@lukejamesk/core'
import { ButtonProps, ButtonVariant } from '../Button/types'

export type ButtonIconProps = {
  variant?: ButtonVariant
  icon: IconName
} & ButtonProps
