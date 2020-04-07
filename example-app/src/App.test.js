import React from 'react'
import { render } from 'enzyme'
import App from './App'

describe('<App />', () => {
  it('should render', () => {
    const wrapper = render(<App name="Test" />)
    expect(wrapper).toMatchSnapshot()
  })
})
