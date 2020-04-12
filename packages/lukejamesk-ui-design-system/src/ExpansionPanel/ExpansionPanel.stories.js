import React from 'react'
import { ExpanderContext } from '@lukejamesk/core'
import ExpansionPanel from './ExpansionPanel'
import ExpansionPanelHeader from './ExpansionPanelHeader'
import ExpansionPanelBody from './ExpansionPanelBody'

export default {
  title: 'Design System|Expansion Panel',
  component: ExpansionPanel,
  subcomponents: {
    ExpansionPanelHeader,
    ExpansionPanelBody,
    ExpanderContext,
  },
}

export const Default = () => (
  <ExpansionPanel id="story">
    <ExpansionPanelHeader>Header</ExpansionPanelHeader>
    <ExpansionPanelBody>body</ExpansionPanelBody>
  </ExpansionPanel>
)
