import React from 'react'
import { render } from 'enzyme'
import Button from './Button'

describe('<Button />', () => {
  it('Should render', () => {
    const wrapper = render(<Button>My content for button</Button>)
    expect(wrapper).toMatchSnapshot()
  })
})
