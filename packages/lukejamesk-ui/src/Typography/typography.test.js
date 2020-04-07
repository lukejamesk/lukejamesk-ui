import React from 'react'
import { render } from 'enzyme'
import { forEach } from 'ramda'
import Typography from './Typography'

const textTypes = ['paragraph', 'bold', 'blockquote', 'heading1', 'heading2', 'heading3']

describe('<Typography />', () => {
  forEach((type) => {
    it(`should render with: ${type}`, () => {
      const wrapper = render(
        <Typography variant={type}>
          My content for
          {type}
        </Typography>,
      )
      expect(wrapper).toMatchSnapshot()
    })
  }, textTypes)

  it('should render a paragraph when paragraph is true', () => {
    const wrapper = render(<Typography paragraph>My content for paragraph</Typography>)
    expect(wrapper).toMatchSnapshot()
  })

  it('with no type', () => {
    const wrapper = render(<Typography>My content for no text type</Typography>)
    expect(wrapper).toMatchSnapshot()
  })
})
