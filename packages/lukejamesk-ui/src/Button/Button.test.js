import React from 'react'
import { render } from 'enzyme'
import Button from './Button'
import ButtonInteractor from './Button.interactor'

describe('<Button />', () => {
  it('Should render', () => {
    const wrapper = render(<Button>My content for button</Button>)
    expect(wrapper).toMatchSnapshot()
  })
  describe('Actions:', () => {
    let clickSpy
    let interactor
    beforeEach(() => {
      clickSpy = jest.fn()
      interactor = ButtonInteractor(<Button onClick={clickSpy}>My content for button</Button>)
    })
    it('should fire onClick callback', () => {
      interactor.actions.click()
      expect(clickSpy.mock.calls.length).toEqual(1)
    })
  })
})
