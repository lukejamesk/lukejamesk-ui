import { forwardRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import { setRef, getDocument } from '../util'

const Portal = forwardRef(({ container, children }, ref) => {
  const [mountNode, setMountNode] = useState(null)

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

Portal.propTypes = {
  /* eslint-disable-next-line */
  container: PropTypes.object,
  children: PropTypes.node,
}

Portal.defaultProps = {
  children: null,
  container: getDocument().body,
}

export default Portal
