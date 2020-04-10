import React, { forwardRef, useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import FocusTrap from '../FocusTrap'
import { useForkRef } from '../hooks'
import { getDocument } from '../util'
import { ModalHandlersProvider } from './ModalContext'
import ModalManager from './ModalManager'

import Portal from '../Portal'

const noop = () => {}
const manager = new ModalManager()

const Modal = forwardRef(({ open, children, onClose, container, mountedOnClose, disableFocusTrap }, ref) => {
  const modal = useRef({})
  const modalRef = useRef(null)
  const handleRef = useForkRef(modalRef, ref)
  const mountNodeRef = useRef(null)

  const getModal = () => {
    modal.current.modalRef = modalRef.current
    modal.current.mountNode = mountNodeRef.current
    return modal.current
  }

  const handleMounted = () => {
    manager.mount(getModal())
    modalRef.current.scrollTop = 0
  }

  const handlePortalRef = useCallback((node) => {
    mountNodeRef.current = node

    if (!node) {
      return
    }
    if (open) {
      handleMounted()
    }
  })

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
})

Modal.displayName = 'Modal'

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  container: PropTypes.instanceOf(Element),
  open: PropTypes.bool,
  mountedOnClose: PropTypes.bool,
  disableFocusTrap: PropTypes.bool,
}

Modal.defaultProps = {
  open: null,
  children: null,
  onClose: noop,
  container: getDocument().body,
  mountedOnClose: false,
  disableFocusTrap: false,
}

export default Modal
