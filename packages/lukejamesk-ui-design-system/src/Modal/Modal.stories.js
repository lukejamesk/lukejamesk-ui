import React, { useState } from 'react'
import { select } from '@storybook/addon-knobs'
import { defaultTheme } from '@lukejamesk/styles'
import { Breakpoints } from '@lukejamesk/core'
import Button from '../Button'
import { Typography } from '../Typography'
import Modal, { modalSizes } from './Modal'

export default {
  title: 'Design System/Modal',
  component: Modal,
  subcomponents: {
    'Modal.Head': Modal.Head,
    'Modal.Body': Modal.Body,
    'Modal.Actions': Modal.Actions,
  },
}

export const Default = () => {
  const [modalOpened, setModalOpened] = useState(true)

  const closeModal = () => setModalOpened(false)

  return (
    <Breakpoints breakpoints={defaultTheme.breakpoints}>
      <Button type="button" onClick={() => setModalOpened(true)}>
        Open Modal
      </Button>
      <Modal open={modalOpened} onClose={closeModal} size={select('Size', modalSizes, 'm')}>
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
    </Breakpoints>
  )
}
