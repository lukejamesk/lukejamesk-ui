import React from 'react'
import { arrowDown, arrowUp } from '@lukejamesk/icons'
import ExpansionPanel from './ExpansionPanel'
import ExpansionPanelHeader from './ExpansionPanelHeader'
import ExpansionPanelBody from './ExpansionPanelBody'

import library from '../library'

library.add(arrowDown)
library.add(arrowUp)

export default {
  title: 'UI|Expansion Panel',
}

export const Default = () => (
  <ExpansionPanel id="story">
    <ExpansionPanelHeader>Header</ExpansionPanelHeader>
    <ExpansionPanelBody>body</ExpansionPanelBody>
  </ExpansionPanel>
)
