import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Modal } from '../Modal'

const ConfirmationDialogActions = ({ children }) => {
  return (
    <Modal.Actions>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          variant: 'default',
        })
      })}
    </Modal.Actions>
  )
}

ConfirmationDialogActions.propTypes = {
  children: PropTypes.node,
}

export default ConfirmationDialogActions
