import React from 'react'
import Expander from './Expander'
import ExpanderHeader from './ExpanderHead'
import ExpanderBody from './ExpanderBody'

export default {
  title: 'Core/Expander',
  component: Expander,
}

export const Default = () => (
  <Expander id="story" uncontrolled>
    <ExpanderHeader>Click to close/open</ExpanderHeader>
    <ExpanderBody>My content</ExpanderBody>
  </Expander>
)
