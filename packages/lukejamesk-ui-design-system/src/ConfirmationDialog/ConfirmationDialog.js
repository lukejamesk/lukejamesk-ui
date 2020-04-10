import React from 'react'
import PropTypes from 'prop-types'
import { Modal, modalSizes } from '../Modal'
import ConfirmationDialogActions from './ConfirmationDialogActions'

const ConfirmationDialog = ({ size, ...props }) => {
  return <Modal size={size} {...props} disableCurtain />
}

ConfirmationDialog.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(modalSizes),
}

ConfirmationDialog.defaultProps = {
  size: 's',
}

ConfirmationDialog.Title = Modal.Head
ConfirmationDialog.Body = Modal.Body
ConfirmationDialog.Actions = ConfirmationDialogActions

export default ConfirmationDialog
