import React from 'react'
import { render } from 'enzyme'
import ButtonBase from './ButtonBase'
import ButtonBaseInteractor from './ButtonBase.interactor'

describe('<ButtonBase />', () => {
  it('Should render', () => {
    const wrapper = render(<ButtonBase>My content for button</ButtonBase>)
    expect(wrapper).toMatchSnapshot()
  })

  it('Should allow a to use an alternate element', () => {
    const clickSpy = jest.fn()
    const interactor = ButtonBaseInteractor(
      <ButtonBase element="span" onClick={clickSpy}>
        My content for button
      </ButtonBase>,
    )

    expect(interactor.elements.button().type()).toEqual('span')
    interactor.actions.click()
    expect(clickSpy.mock.calls.length).toEqual(1)
  })

  describe('Actions:', () => {
    let clickSpy
    let interactor
    beforeEach(() => {
      clickSpy = jest.fn()
      interactor = ButtonBaseInteractor(<ButtonBase onClick={clickSpy}>My content for button</ButtonBase>)
    })
    it('should fire onClick callback', () => {
      interactor.actions.click()
      expect(clickSpy.mock.calls.length).toEqual(1)
    })
  })
})
