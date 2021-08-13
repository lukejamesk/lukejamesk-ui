import React from 'react'
import { useModalHandlers, library } from '@lukejamesk/core'
import { times } from '@lukejamesk/icons'
import ButtonIcon from '../ButtonIcon'
import { Typography } from '../Typography'

library.add(times)

const ModalHead: React.FC = ({ children }) => {
  const { onClose } = useModalHandlers()
  return (
    <div className="ljk-m-m ljk-flex ljk-justify-between ljk-items-center">
      <Typography variant="heading2" className="ljk-my-0">
        {children}
      </Typography>
      <ButtonIcon icon="times" onClick={onClose} />
    </div>
  )
}

export default ModalHead
