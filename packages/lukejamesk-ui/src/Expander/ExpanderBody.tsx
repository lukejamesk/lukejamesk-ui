import React from 'react'
import PropTypes from 'prop-types'

export type ExpanderBodyProps = {
  children: React.ReactNode
}

const ExpanderBody: React.FunctionComponent<ExpanderBodyProps> = ({ children }) => {
  return <span>{children}</span>
}

ExpanderBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ExpanderBody
