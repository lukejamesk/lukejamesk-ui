import React from 'react'
import { mount } from 'enzyme'
import App from './app'

describe('<App />', () => {
  it('should render', () => {
    const wrapper = mount(<App name="Test" />)
    expect(wrapper).toMatchSnapshot()
  })
})
