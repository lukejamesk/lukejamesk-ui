import React from 'react'
import { render } from 'enzyme'
import Spinner from './Spinner'

describe('<Spinner />', () => {
  it('should render', () => {
    const wrapper = render(<Spinner />)
    expect(wrapper).toMatchSnapshot()
  })
})
