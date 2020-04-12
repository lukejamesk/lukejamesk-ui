import React from 'react'
import PropTypes from 'prop-types'
import { Expander } from '@lukejamesk/core'
import ExpansionPanelHead from './ExpansionPanelHead'
import ExpansionPanelBody from './ExpansionPanelBody'

const ExpansionPanel = (props) => <Expander {...props} />

ExpansionPanel.Head = ExpansionPanelHead
ExpansionPanel.Body = ExpansionPanelBody

ExpansionPanel.propTypes = {
  children: PropTypes.node.isRequired,
  uncontrolled: PropTypes.bool,
}

ExpansionPanel.defaultProps = {
  uncontrolled: false,
}
export default ExpansionPanel
