import React, { useState } from 'react'
import Button from '../Button'
import { Typography } from '../Typography'
import ConfirmationDialog from './ConfirmationDialog'
import { DeleteButton } from '../Buttons'

export default {
  title: 'Design System/Confirmation Dialog',
  component: ConfirmationDialog,
  subcomponents: {
    'ConfirmationDialog.Title': ConfirmationDialog.Title,
    'ConfirmationDialog.Body': ConfirmationDialog.Body,
    'ConfirmationDialog.Actions': ConfirmationDialog.Actions,
  },
}

export const Default = () => {
  const [modalOpened, setModalOpened] = useState(true)

  const closeModal = () => setModalOpened(false)

  return (
    <>
      <Button type="button" onClick={() => setModalOpened(true)}>
        Open Modal
      </Button>
      <ConfirmationDialog open={modalOpened} onClose={closeModal}>
        <ConfirmationDialog.Title>Confirmation</ConfirmationDialog.Title>
        <ConfirmationDialog.Body>
          <Typography paragraph>Are you sure you would like to delete this?</Typography>
        </ConfirmationDialog.Body>
        <ConfirmationDialog.Actions>
          <Button onClick={closeModal}>No, thanks </Button>
          <DeleteButton onClick={closeModal} />
        </ConfirmationDialog.Actions>
      </ConfirmationDialog>
    </>
  )
}
