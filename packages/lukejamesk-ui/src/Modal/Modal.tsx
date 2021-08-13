import React, { forwardRef, useCallback, useEffect, useRef } from 'react'
import FocusTrap from '../FocusTrap'
import { useForkRef } from '../hooks'
import { getDocument } from '../util'
import { ModalHandlersProvider } from './ModalContext'
import ModalManager from './ModalManager'

import Portal from '../Portal'

const noop = () => {}
const manager = new ModalManager()

export type ModalProps = React.PropsWithChildren<{
  open: boolean
  onClose?: () => void
  container?: HTMLElement
  mountedOnClose?: boolean
  disableFocusTrap?: boolean
}>

type ModalRef = {
  modalRef: HTMLDivElement | null
  mountNode: HTMLBodyElement | null
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open = false,
      children,
      onClose = noop,
      container = getDocument().body,
      mountedOnClose = false,
      disableFocusTrap = false,
    },
    ref,
  ) => {
    const modal = useRef<ModalRef>({
      modalRef: null,
      mountNode: null,
    })
    const modalRef = useRef<HTMLDivElement | null>(null)
    const mountNodeRef = useRef<HTMLBodyElement | null>(null)
    const handleRef: React.Ref<HTMLDivElement> = useForkRef<HTMLDivElement>(modalRef, ref)

    const getModal = () => {
      modal.current.modalRef = modalRef.current
      modal.current.mountNode = mountNodeRef.current
      return modal.current
    }

    const handleMounted = () => {
      manager.mount(getModal())
      if (modalRef && modalRef.current) {
        modalRef.current.scrollTop = 0
      }
    }

    const handlePortalRef = useCallback((node: HTMLBodyElement) => {
      mountNodeRef.current = node

      if (!node) {
        return
      }
      if (open) {
        handleMounted()
      }
    }, [])

    const handleOpen = useCallback(() => {
      manager.add(getModal(), document.body)
    }, [manager])

    const handleClose = useCallback(() => {
      manager.remove(getModal())
    }, [manager])

    useEffect(() => {
      return () => {
        handleClose()
      }
    }, [handleClose])

    useEffect(() => {
      if (open) {
        handleOpen()
      } else {
        handleClose()
      }
    }, [open, handleClose, handleOpen])

    if (!mountedOnClose && !open) {
      return null
    }

    return (
      <Portal ref={handlePortalRef} container={container}>
        <ModalHandlersProvider onClose={onClose}>
          <div ref={handleRef}>
            <FocusTrap disabled={disableFocusTrap}>{children}</FocusTrap>
          </div>
        </ModalHandlersProvider>
      </Portal>
    )
  },
)

Modal.displayName = 'Modal'

export default Modal
