import React from 'react'
import { render } from 'enzyme'
import { forEach } from 'ramda'
import Typography from './Typography'
import { TypographyVariant } from './types'

const variants: TypographyVariant[] = [
  'paragraph',
  'bold',
  'blockquote',
  'text',
  'heading1',
  'heading2',
  'heading3',
]

describe('<Typography />', () => {
  forEach((variant: TypographyVariant) => {
    describe(`Variant: ${variant}`, () => {
      it('should render', () => {
        const wrapper = render(<Typography variant={variant}>My content</Typography>)
        expect(wrapper).toMatchSnapshot()
      })
    })
  }, variants)
})
