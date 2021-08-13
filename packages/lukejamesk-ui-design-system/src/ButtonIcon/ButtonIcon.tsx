import React, { forwardRef } from 'react'
import Icon from '../Icon'
import { IconColor } from '../Icon/types'
import Button from '../Button'
import { ButtonIconProps } from './types'
import { ButtonVariant, ButtonRef } from '../Button/types'

const variantToIconVariant: Record<ButtonVariant, IconColor> = {
  default: 'dark',
  primary: 'light',
  secondary: 'primary',
  danger: 'light',
}

const ButtonIcon = forwardRef<ButtonRef, ButtonIconProps>(
  ({ icon, variant = 'default', children, ...props }, ref) => {
    return (
      <Button variant={variant} {...props} ref={ref}>
        <Icon variant={variantToIconVariant[variant]} name={icon} />
        {children && <span className="ljk-ml-xxs">{children}</span>}
      </Button>
    )
  },
)

ButtonIcon.displayName = 'ButtonIcon'

export default ButtonIcon
