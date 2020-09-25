import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type IconName = IconProp

export type IconProps = {
  name: IconName
  className?: string
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  return <FontAwesomeIcon icon={name} className={className} />
}

export default Icon
