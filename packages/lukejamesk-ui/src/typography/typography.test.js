import React from 'react'
import { mount } from 'enzyme'
import { forEach } from 'ramda'
import Typography from './typography'

const textTypes = [
  'paragraph',
  'bold',
  'blockquote',
  'heading1',
  'heading2',
  'heading3'
]

describe('<Typography />', () => {
  forEach((type) => {
    it(`should render with: ${type}`, () => {
      const wrapper = mount(
        <Typography type={type}>
          My content for
          {type}
        </Typography>
      )
      expect(wrapper).toMatchSnapshot()
    })
  }, textTypes)

  it('should render a paragraph when paragraph is true', () => {
    const wrapper = mount(
      <Typography paragraph>
        My content for paragraph
      </Typography>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('with no type', () => {
    const wrapper = mount(
      <Typography>
        My content for paragraph
      </Typography>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
