import React from 'react'
import { Modal } from '../Modal'
import ConfirmationDialogActions from './ConfirmationDialogActions'
import { ConfirmationDialogActionsProps, ConfirmationDialogProps } from './types'

const ConfirmationDialog: React.FC<ConfirmationDialogProps> & {
  Title: React.FC
  Body: React.FC
  Actions: React.FC<ConfirmationDialogActionsProps>
} = ({ size = 'm', ...props }) => {
  return <Modal size={size} {...props} disableCurtain />
}

ConfirmationDialog.Title = Modal.Head
ConfirmationDialog.Body = Modal.Body
ConfirmationDialog.Actions = ConfirmationDialogActions

export default ConfirmationDialog
