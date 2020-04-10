import React from 'react'
import PropTypes from 'prop-types'

const ExpansionPanelBody = ({ children }) => {
  return <div className="ljk-pt-m ljk-pb-m">{children}</div>
}

ExpansionPanelBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ExpansionPanelBody
