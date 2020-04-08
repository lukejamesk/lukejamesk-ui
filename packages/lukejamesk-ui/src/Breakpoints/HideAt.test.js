import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount, render } from 'enzyme'
import { changeWindowWidth, setWindowWidth } from '@lukejamesk/test-utils'
import Breakpoints from './Breakpoints'
import HideAt from './HideAt'

const defaultBreakpoints = {
  s: 0,
  m: 768,
  l: 1920,
}

describe('<HideAt />', () => {
  const initialWidth = global.innerWidth

  describe('window viewport larger than <HideAt /> bp', () => {
    let wrapper

    beforeEach(() => {
      setWindowWidth(defaultBreakpoints.l)
      wrapper = mount(
        <Breakpoints breakpoints={defaultBreakpoints}>
          <HideAt bp="m">
            <div>My content</div>
          </HideAt>
        </Breakpoints>,
      )
    })
    it('should not render the content', () => {
      expect(wrapper.find('div').length).toEqual(0)
    })
  })

  describe('Window viewport same as <HideAt /> bp', () => {
    let wrapper

    beforeEach(() => {
      setWindowWidth(defaultBreakpoints.m)
      wrapper = mount(
        <Breakpoints breakpoints={defaultBreakpoints}>
          <HideAt bp="m">
            <div>My content</div>
          </HideAt>
        </Breakpoints>,
      )
    })
    it('should not render the content', () => {
      expect(wrapper.find('div').length).toEqual(0)
    })
  })

  describe('Window viewport smaller than <HideAt /> bp', () => {
    let wrapper
    beforeEach(() => {
      setWindowWidth(defaultBreakpoints.m - 50)
      wrapper = mount(
        <Breakpoints breakpoints={defaultBreakpoints}>
          <HideAt bp="m">
            <div>My content</div>
          </HideAt>
        </Breakpoints>,
      )
    })
    it('should render the content', () => {
      expect(wrapper.find('div').length).toEqual(1)
    })
  })

  describe('Window viewport changing from large to small', () => {
    let wrapper
    beforeEach(() => {
      setWindowWidth(defaultBreakpoints.l)
      wrapper = mount(
        <Breakpoints breakpoints={defaultBreakpoints}>
          <HideAt bp="m">
            <div>My content</div>
          </HideAt>
        </Breakpoints>,
      )
    })

    it('Should be hidden and then display when window changes', () => {
      expect(wrapper.find('div').length).toEqual(0)
      act(() => {
        changeWindowWidth(defaultBreakpoints.s)
      })
      wrapper.update()
      expect(wrapper.find('div').length).toEqual(1)
    })
  })

  describe('Errors:', () => {
    it('should throw an error if the bp does not exist', () => {
      const renderComponent = () =>
        render(
          <Breakpoints breakpoints={defaultBreakpoints}>
            <HideAt bp="doesntexist">
              <div>My content</div>
            </HideAt>
          </Breakpoints>,
        )
      expect(() => renderComponent()).toThrow(
        `Breakpoint doesntexist was not found in breakpoints ${defaultBreakpoints}`,
      )
    })
  })

  afterEach(() => {
    global.innerWidth = initialWidth
  })
})
