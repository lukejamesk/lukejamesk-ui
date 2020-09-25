import React from 'react'
import { render } from 'enzyme'
import { forEach } from 'ramda'
import { TypographyVariant } from './types'
import Typography from './Typography'

const textTypes: Array<TypographyVariant> = [
  'paragraph',
  'bold',
  'blockquote',
  'heading1',
  'heading2',
  'heading3',
  'text',
]

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
})
