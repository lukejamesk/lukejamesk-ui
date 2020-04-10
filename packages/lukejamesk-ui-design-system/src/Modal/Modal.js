import React from 'react'
import PropTypes from 'prop-types'
import { Modal as ModalCore, useModalHandlers } from '@lukejamesk/core'
import clsx from 'clsx'
import Curtain from '../Curtain'
import ModalHead from './ModalHead'
import ModalBody from './ModalBody'
import ModalActions from './ModalActions'

export const modalSizes = ['s', 'm', 'l']

const mapSizeToClass = {
  s: 'ljk-w-1/4',
  m: 'ljk-w-2/4',
  l: 'ljk-w-3/4',
}

const ModalWrapper = ({ children, size, disableCurtain }) => {
  const { onClose } = useModalHandlers()

  return (
    <div className="ljk-fixed ljk-w-full ljk-h-full ljk-top-0 ljk-left-0 ljk-flex ljk-items-start ljk-justify-center ljk-overflow-y-auto ljk-max-h-screen ljk-p-xxxl">
      <Curtain onClick={disableCurtain ? undefined : onClose} />
      <div
        className={clsx(
          mapSizeToClass[size],
          'ljk-bg-white ljk-md:max-w-md ljk-mx-auto ljk-rounded ljk-shadow-lg ljk-z-50',
        )}
      >
        {children}
      </div>
    </div>
  )
}

ModalWrapper.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(modalSizes),
  disableCurtain: PropTypes.bool,
}

const Modal = ({ onClose, open, children, size, disableCurtain }) => (
  <ModalCore onClose={onClose} open={open}>
    <ModalWrapper size={size} disableCurtain={disableCurtain}>
      {children}
    </ModalWrapper>
  </ModalCore>
)

Modal.Head = ModalHead
Modal.Body = ModalBody
Modal.Actions = ModalActions

Modal.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
  size: PropTypes.oneOf(modalSizes),
  disableCurtain: PropTypes.bool,
}

Modal.defaultProps = {
  onClose: () => {},
  children: null,
  size: 'm',
  disableCurtain: false,
}

export default Modal
