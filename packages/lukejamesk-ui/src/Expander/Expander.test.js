import React from 'react'
import ExpanderInteractor from './Expander.interactor'
import Expander from './Expander'
import ExpanderHead from './ExpanderHead'
import ExpanderBody from './ExpanderBody'

describe('<Expander />', () => {
  it('should allow to only mount children when it is expanded', () => {
    const interactor = ExpanderInteractor(
      <Expander id="test" uncontrolled>
        <ExpanderHead>My title</ExpanderHead>
        <ExpanderBody>My content</ExpanderBody>
      </Expander>,
    )
    expect(interactor.elements.body().elements.body().length).toEqual(0)
    interactor.actions.toggle()
    expect(interactor.elements.body().elements.body().length > 0).toEqual(true)
  })
})
