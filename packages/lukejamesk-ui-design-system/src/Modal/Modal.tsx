import React from 'react'
import { Modal as ModalCore, useModalHandlers, useBreakpoints } from '@lukejamesk/core'
import clsx from 'clsx'
import { keys } from 'ramda'
import Curtain from '../Curtain'
import ModalHead from './ModalHead'
import ModalBody from './ModalBody'
import ModalActions from './ModalActions'
import { ModalProps, ModalSize } from './types'

const mapSizeToClass = {
  s: 'ljk-w-full m:ljk-max-w-sm',
  m: 'ljk-w-full m:ljk-max-w-xl',
  l: 'ljk-w-full m:ljk-max-w-5xl',
}

type ModalWrapperProps = React.PropsWithChildren<{
  size: ModalSize
  disableCurtain: boolean
}>

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, size, disableCurtain }) => {
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
const Modal: React.FC<ModalProps> & {
  Head: React.FC
  Body: React.FC
  Actions: React.FC
} = ({ onClose = () => {}, open, children, size = 'm', disableCurtain = false }) => (
  <ModalCore onClose={onClose} open={open}>
    <ModalWrapper size={size} disableCurtain={disableCurtain}>
      {children}
    </ModalWrapper>
  </ModalCore>
)

Modal.Head = ModalHead
Modal.Body = ModalBody
Modal.Actions = ModalActions

export default Modal
