import React from 'react'
import PropTypes from 'prop-types'
import { Modal as ModalCore, useModalHandlers, useBreakpoints } from '@lukejamesk/core'
import clsx from 'clsx'
import { keys } from 'ramda'
import Curtain from '../Curtain'
import ModalHead from './ModalHead'
import ModalBody from './ModalBody'
import ModalActions from './ModalActions'

export const modalSizes = ['s', 'm', 'l']

const mapSizeToClass = {
  s: 'ljk-w-full m:ljk-max-w-sm',
  m: 'ljk-w-full m:ljk-max-w-xl',
  l: 'ljk-w-full m:ljk-max-w-5xl',
}

const ModalWrapper = ({ children, size, disableCurtain }) => {
  const { onClose } = useModalHandlers()
  const { currentBreakpoint } = useBreakpoints()
  return (
    <div className="ljk-fixed ljk-w-full ljk-h-full ljk-top-0 ljk-left-0 ljk-flex ljk-items-start ljk-justify-center ljk-overflow-y-auto ljk-max-h-screen ljk-p-m m:ljk-p-xxxl">
      <Curtain onClick={disableCurtain ? undefined : onClose} />
      <div
        className={clsx(
          currentBreakpoint[keys(currentBreakpoint)[0]] < 500 ? 'ljk-w-11/12' : mapSizeToClass[size],
          'ljk-bg-white  ljk-mx-auto ljk-rounded ljk-shadow-lg ljk-z-50',
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
