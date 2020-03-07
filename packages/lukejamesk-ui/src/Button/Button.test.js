import React from 'react'
import { render } from 'enzyme'
import { defaultTheme, ThemeProvider } from '@lukejamesk/styles'
import Button from './Button'
import ButtonInteractor from './Button.interactor'

describe('<Button />', () => {
  it('Should render', () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <Button>My content for button</Button>
      </ThemeProvider>,
    )
    expect(wrapper).toMatchSnapshot()
  })
  describe('Actions:', () => {
    let clickSpy
    let interactor
    beforeEach(() => {
      clickSpy = jest.fn()
      interactor = ButtonInteractor(
        <ThemeProvider theme={defaultTheme}>
          <Button onClick={clickSpy}>My content for button</Button>
        </ThemeProvider>,
      )
    })
    it('should fire onClick callback', () => {
      interactor.actions.click()
      expect(clickSpy.mock.calls.length).toEqual(1)
    })
  })
})
