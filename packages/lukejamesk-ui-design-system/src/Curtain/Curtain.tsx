import React from 'react'
import { ButtonBase } from '@lukejamesk/core'
import { CurtainProps } from './types'

const Curtain: React.FC<CurtainProps> = ({ onClick = undefined }) => {
  const Element = onClick !== undefined ? ButtonBase : 'div'
  return (
    <Element
      onClick={onClick}
      className="ljk-fixed ljk-w-full ljk-h-full ljk-bg-gray-900 ljk-opacity-50 ljk-inset-0"
    />
  )
}

export default Curtain
