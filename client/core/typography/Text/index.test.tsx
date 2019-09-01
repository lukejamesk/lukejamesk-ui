import React from 'react'
import { mount } from 'enzyme'
import { Text } from '.'
import { forEach } from 'ramda'

const textTypes = ['p', 'strong', 'blockquote']

describe('<Text />', () => {
  forEach(type => {
    it(`should render with: ${type}`, () => {
      const wrapper = mount(<Text type={type}>My content for {type}</Text>)
      expect(wrapper).toMatchSnapshot()
    })
  }, textTypes)
})
