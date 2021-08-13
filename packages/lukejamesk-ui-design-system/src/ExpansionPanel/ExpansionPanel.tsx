import React from 'react'
import { Expander } from '@lukejamesk/core'
import ExpansionPanelHead from './ExpansionPanelHead'
import ExpansionPanelBody from './ExpansionPanelBody'
import { ExpanderProps } from '@lukejamesk/core'

const ExpansionPanel: React.FC<ExpanderProps> & {
  Head: React.FC
  Body: React.FC
} = (props) => <Expander {...props} />

ExpansionPanel.Head = ExpansionPanelHead
ExpansionPanel.Body = ExpansionPanelBody

ExpansionPanel.propTypes = Expander.propTypes

ExpansionPanel.defaultProps = Expander.defaultProps

export default ExpansionPanel
