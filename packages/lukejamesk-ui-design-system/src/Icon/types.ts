import { IconName } from '@lukejamesk/core'

export type IconColor = 'light' | 'dark' | 'primary' | 'secondary'

export type IconSize = 's' | 'm' | 'l' | 'auto'

export type IconProps = {
  variant?: IconColor
  size?: IconSize
  name: IconName
}
