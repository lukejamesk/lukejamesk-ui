import React from 'react'
import { render } from 'enzyme'
import { library } from '@lukejamesk/core'
import { coffee } from '@lukejamesk/icons'
import { forEach } from 'ramda'
import Icon, { iconSizes, iconVariants } from './Icon'

library.add(coffee)

describe('<ButtonIcon />', () => {
  forEach((size) => {
    forEach((variant) => {
      describe(`Size: ${size} and Variant: ${variant}`, () => {
        it('should render', () => {
          const wrapper = render(<Icon size={size} variant={variant} name="coffee" />)
          expect(wrapper).toMatchSnapshot()
        })
      })
    }, iconVariants)
  }, iconSizes)
})
