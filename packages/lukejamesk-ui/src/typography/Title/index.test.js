import React from 'react'
import { mount } from 'enzyme'
import { forEach } from 'ramda'
import { Title } from '.'

const titleTypes = ['heading1', 'heading2', 'heading3']

describe('<Title />', () => {
  it('with no type', () => {
    const wrapper = mount(
      <Title>
        My content for no title
      </Title>
    )
    expect(wrapper).toMatchSnapshot()
  })
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
