import React from 'react'
import PropTypes from 'prop-types'

const ExpanderBody = ({ children }) => {
  return <span>{children}</span>
}

ExpanderBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ExpanderBody
