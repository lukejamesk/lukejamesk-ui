import React, { forwardRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { setRef, getDocument } from '../util'

export type PortalProps = React.PropsWithChildren<{
  container?: HTMLElement
  children?: React.ReactNode
}>

const Portal = forwardRef<HTMLElement, PortalProps>(({ container = getDocument().body, children }, ref) => {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setMountNode(container)
  }, [container, children])

  useEffect(() => {
    if (mountNode) {
      setRef(ref, mountNode)
    }
    return () => {
      setRef(ref, null)
    }
  }, [ref, mountNode])

  return mountNode && createPortal(children, mountNode)
})

Portal.displayName = 'Portal'

export default Portal
