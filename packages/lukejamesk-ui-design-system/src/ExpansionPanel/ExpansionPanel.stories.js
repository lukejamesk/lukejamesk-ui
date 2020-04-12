import React from 'react'
import { ExpanderContext } from '@lukejamesk/core'
import ExpansionPanel from './ExpansionPanel'

export default {
  title: 'Design System|Expansion Panel',
  component: ExpansionPanel,
  subcomponents: {
    'ExpansionPanel.Head': ExpansionPanel.Head,
    'ExpansionPanel.Body': ExpansionPanel.Body,
    ExpanderContext,
  },
}

export const Default = () => (
  <ExpansionPanel id="story" uncontrolled>
    <ExpansionPanel.Head>Header</ExpansionPanel.Head>
    <ExpansionPanel.Body>body</ExpansionPanel.Body>
  </ExpansionPanel>
)
