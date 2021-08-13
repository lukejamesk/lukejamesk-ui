import React, { useState } from 'react'
import Modal from './Modal'
import ButtonBase from '../ButtonBase'
import { useModalHandlers } from './ModalContext'
import Typography from '../Typography'

export default {
  title: 'Core/Modal',
  component: Modal,
}

const ModalStoryBody: React.FC = () => {
  const { onClose } = useModalHandlers()

  return (
    <div
      style={{
        backgroundColor: '#efefef',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Typography variant="heading1">My modal content</Typography>
      <ButtonBase onClick={onClose}>Close modal</ButtonBase>
    </div>
  )
}
export const Default: React.FC = () => {
  const [modalOpened, setModalOpened] = useState(false)

  const closeModal = () => setModalOpened(false)

  return (
    <>
      <ButtonBase onClick={() => setModalOpened(true)}>Open Modal</ButtonBase>
      <Modal open={modalOpened} onClose={closeModal}>
        <ModalStoryBody />
      </Modal>
    </>
  )
}
