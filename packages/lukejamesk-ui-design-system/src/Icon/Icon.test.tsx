import React from 'react'
import { render } from 'enzyme'
import { library } from '@lukejamesk/core'
import { coffee } from '@lukejamesk/icons'
import { forEach } from 'ramda'
import Icon from './Icon'
import { IconColor, IconSize } from './types'

library.add(coffee)

export const iconSizes: IconSize[] = ['s', 'm', 'l']
export const iconVariants: IconColor[] = ['dark', 'light', 'primary', 'secondary']

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
