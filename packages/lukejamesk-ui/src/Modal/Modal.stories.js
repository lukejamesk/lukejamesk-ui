import React, { useState } from 'react'
import ButtonBase from '../ButtonBase'
import Modal from './Modal'
import { useModalHandlers } from './ModalContext'
import Typography from '../Typography'

export default {
  title: 'Core/Modal',
  component: Modal,
}

const ModalStoryBody = () => {
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
export const Default = () => {
  const [modalOpened, setModalOpened] = useState(false)

  const closeModal = () => setModalOpened(false)

  return (
    <>
      <button type="button" onClick={() => setModalOpened(true)}>
        Open Modal
      </button>
      <Modal open={modalOpened} onClose={closeModal}>
        <ModalStoryBody />
      </Modal>
    </>
  )
}
