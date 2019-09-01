import React from 'react'
import { mount } from 'enzyme'
import { forEach } from 'ramda'
import { Title } from '.'

const titleTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

describe('<Title />', () => {
  forEach((title) => {
    it(`should render with: ${title}`, () => {
      const wrapper = mount(
        <Title type={title}>
          My content for
          {title}
        </Title>
      )
      expect(wrapper).toMatchSnapshot()
    })
  }, titleTypes)
})
