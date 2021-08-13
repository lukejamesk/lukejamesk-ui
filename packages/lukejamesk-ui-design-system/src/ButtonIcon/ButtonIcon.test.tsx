import React from 'react'
import { render } from 'enzyme'
import { library } from '@lukejamesk/core'
import { coffee } from '@lukejamesk/icons'
import ButtonIcon from './ButtonIcon'

library.add(coffee)

describe('<ButtonIcon />', () => {
  it('Should render with text', () => {
    const wrapper = render(<ButtonIcon icon="coffee">My content for button</ButtonIcon>)
    expect(wrapper).toMatchSnapshot()
  })
  it('Should render without text', () => {
    const wrapper = render(<ButtonIcon icon="coffee" />)
    expect(wrapper).toMatchSnapshot()
  })
})
