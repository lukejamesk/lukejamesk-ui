import React from 'react'
import { render } from 'enzyme'
import { forEach } from 'ramda'
import Typography, { typographyVariants } from './Typography'

describe('<Typography />', () => {
  forEach((variant) => {
    describe(`Variant: ${variant}`, () => {
      it('should render', () => {
        const wrapper = render(<Typography variant={variant}>My content</Typography>)
        expect(wrapper).toMatchSnapshot()
      })
    })
  }, typographyVariants)
})
