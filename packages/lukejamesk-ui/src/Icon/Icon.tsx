import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProps } from './types'

const Icon: React.FC<IconProps> = ({ name, className }) => {
  return <FontAwesomeIcon icon={name} className={className} />
}

export default Icon
