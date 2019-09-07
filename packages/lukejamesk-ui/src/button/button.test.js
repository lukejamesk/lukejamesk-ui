import React from 'react'
import { mount } from 'enzyme'
import Button from './button'


describe('<Button />', () => {
  it('should render', () => {
    const wrapper = mount(
      <Button>
        My content for button
      </Button>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
