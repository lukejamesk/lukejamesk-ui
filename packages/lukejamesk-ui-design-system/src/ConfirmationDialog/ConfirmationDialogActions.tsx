import React, { Children, cloneElement, ReactElement } from 'react'
import { Modal } from '../Modal'
import { ConfirmationDialogActionsProps } from './types'

const ConfirmationDialogActions: React.FC<ConfirmationDialogActionsProps> = ({ children }) => {
  return (
    <Modal.Actions>
      {Children.map(children, (child: ReactElement) => {
        return cloneElement(child, {
          variant: 'default',
        })
      })}
    </Modal.Actions>
  )
}

export default ConfirmationDialogActions
