import React from 'react'
import PropTypes from 'prop-types'

const ExpansionPanelBody = ({ children }) => {
  return <div className="rounded-b-lg bg-gray-300 p-4">{children}</div>
}

ExpansionPanelBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ExpansionPanelBody
