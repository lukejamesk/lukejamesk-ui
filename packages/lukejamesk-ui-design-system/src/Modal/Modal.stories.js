import React, { useState } from 'react'
import Button from '../Button'
import Typography from '../Typography'
import Modal from './Modal'

export default {
  title: 'Design System|Modal',
}

export const Default = () => {
  const [modalOpened, setModalOpened] = useState(true)

  const closeModal = () => setModalOpened(false)

  return (
    <>
      <Button type="button" onClick={() => setModalOpened(true)}>
        Open Modal
      </Button>
      <Modal open={modalOpened} onClose={closeModal}>
        <Modal.Head>My title</Modal.Head>
        <Modal.Body>
          <Typography paragraph>Modal content here</Typography>
          <Typography paragraph>...</Typography>
          <Typography paragraph>...</Typography>
          <Typography paragraph>...</Typography>
          <Typography paragraph>...</Typography>
        </Modal.Body>
        <Modal.Actions>
          <Button variant="secondary" onClick={closeModal}>
            Other action
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Continue
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}
