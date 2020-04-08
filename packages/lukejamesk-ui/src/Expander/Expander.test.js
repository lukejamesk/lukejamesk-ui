import React from 'react'
import ExpanderInteractor from './Expander.interactor'
import Expander from './Expander'
import ExpanderHeader from './ExpanderHeader'
import ExpanderBody from './ExpanderBody'

describe('<Expander />', () => {
  it('should allow to only mount children when it is expanded', () => {
    const interactor = ExpanderInteractor(
      <Expander id="test">
        <ExpanderHeader>My title</ExpanderHeader>
        <ExpanderBody>My content</ExpanderBody>
      </Expander>,
    )
    expect(interactor.elements.body().elements.body().length).toEqual(0)
    interactor.actions.toggle()
    expect(interactor.elements.body().elements.body().length > 0).toEqual(true)
  })
})
