import React from 'react'
import { Expander } from '@lukejamesk/core'
import ExpansionPanelHead from './ExpansionPanelHead'
import ExpansionPanelBody from './ExpansionPanelBody'

const ExpansionPanel = (props) => <Expander {...props} />

ExpansionPanel.Head = ExpansionPanelHead
ExpansionPanel.Body = ExpansionPanelBody

ExpansionPanel.propTypes = Expander.propTypes

ExpansionPanel.defaultProps = Expander.defaultProps

export default ExpansionPanel
