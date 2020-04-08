import React from 'react'
import { render } from 'enzyme'
import { library } from '@lukejamesk/core'
import { coffee } from '@lukejamesk/icons'
import ButtonIcon from './ButtonIcon'
import ButtonIconInteractor from './ButtonIcon.interactor'

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

  describe('Actions:', () => {
    let clickSpy
    let interactor
    beforeEach(() => {
      clickSpy = jest.fn()
      interactor = ButtonIconInteractor(
        <ButtonIcon icon="coffee" onClick={clickSpy}>
          My content for button
        </ButtonIcon>,
      )
    })
    it('should fire onClick callback', () => {
      interactor.actions.click()
      expect(clickSpy.mock.calls.length).toEqual(1)
    })
  })
})
