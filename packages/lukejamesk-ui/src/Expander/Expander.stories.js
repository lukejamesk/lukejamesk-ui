import React from 'react'
import Expander from './Expander'
import ExpanderHeader from './ExpanderHeader'
import ExpanderBody from './ExpanderBody'

export default {
  title: 'Core|Expander',
  component: Expander,
  subcomponents: { ExpanderHeader, ExpanderBody },
}

export const Default = () => (
  <Expander id="story">
    <ExpanderHeader>Click to close/open</ExpanderHeader>
    <ExpanderBody>My content</ExpanderBody>
  </Expander>
)
