import React from 'react'
import ExpansionPanel from './ExpansionPanel'
import ExpansionPanelHeader from './ExpansionPanelHeader'
import ExpansionPanelBody from './ExpansionPanelBody'

export default {
  title: 'Design System|Expansion Panel',
}

export const Default = () => (
  <ExpansionPanel id="story">
    <ExpansionPanelHeader>Header</ExpansionPanelHeader>
    <ExpansionPanelBody>body</ExpansionPanelBody>
  </ExpansionPanel>
)
