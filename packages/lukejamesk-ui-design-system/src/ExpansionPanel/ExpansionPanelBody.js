import React from 'react'
import PropTypes from 'prop-types'

const ExpansionPanelBody = ({ children }) => {
  return <div className="ljk-rounded-b-lg ljk-bg-gray-300 ljk-p-m">{children}</div>
}

ExpansionPanelBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ExpansionPanelBody
