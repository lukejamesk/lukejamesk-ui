import React from 'react'
import { render } from 'enzyme'
import Alert from './Alert'

describe('<Alert />', () => {
  it('Should render', () => {
    const wrapper = render(<Alert>My content for button</Alert>)
    expect(wrapper).toMatchSnapshot()
  })
})
