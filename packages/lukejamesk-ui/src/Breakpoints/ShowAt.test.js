import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount, render } from 'enzyme'
import { changeWindowWidth, setWindowWidth } from '@lukejamesk/test-utils'
import Breakpoints from './Breakpoints'
import ShowAt from './ShowAt'

const defaultBreakpoints = {
  s: 0,
  m: 768,
  l: 1920,
}

describe('<ShowAt />', () => {
  const initialWidth = global.innerWidth

  describe('window viewport larger than <ShowAt /> bp', () => {
    let wrapper

    beforeEach(() => {
      setWindowWidth(defaultBreakpoints.l)
      wrapper = mount(
        <Breakpoints breakpoints={defaultBreakpoints}>
          <ShowAt bp="m">
            <div>My content</div>
          </ShowAt>
        </Breakpoints>,
      )
    })
    it('should not render the content', () => {
      expect(wrapper.find('div').length).toEqual(1)
    })
  })

  describe('Window viewport same as <ShowAt /> bp', () => {
    let wrapper

    beforeEach(() => {
      setWindowWidth(defaultBreakpoints.m)
      wrapper = mount(
        <Breakpoints breakpoints={defaultBreakpoints}>
          <ShowAt bp="m">
            <div>My content</div>
          </ShowAt>
        </Breakpoints>,
      )
    })
    it('should not render the content', () => {
      expect(wrapper.find('div').length).toEqual(1)
    })
  })

  describe('Window viewport smaller than <ShowAt /> bp', () => {
    let wrapper
    beforeEach(() => {
      setWindowWidth(defaultBreakpoints.m - 50)
      wrapper = mount(
        <Breakpoints breakpoints={defaultBreakpoints}>
          <ShowAt bp="m">
            <div>My content</div>
          </ShowAt>
        </Breakpoints>,
      )
    })
    it('should render the content', () => {
      expect(wrapper.find('div').length).toEqual(0)
    })
  })

  describe('Window viewport changing from large to small', () => {
    let wrapper
    beforeEach(() => {
      setWindowWidth(defaultBreakpoints.l)
      wrapper = mount(
        <Breakpoints breakpoints={defaultBreakpoints}>
          <ShowAt bp="m">
            <div>My content</div>
          </ShowAt>
        </Breakpoints>,
      )
    })

    it('Should be hidden and then display when window changes', () => {
      expect(wrapper.find('div').length).toEqual(1)
      act(() => {
        changeWindowWidth(defaultBreakpoints.s)
      })
      wrapper.update()
      expect(wrapper.find('div').length).toEqual(0)
    })
  })

  describe('Errors:', () => {
    it('should throw an error if the bp does not exist', () => {
      const renderComponent = () =>
        render(
          <Breakpoints breakpoints={defaultBreakpoints}>
            <ShowAt bp="doesntexist">
              <div>My content</div>
            </ShowAt>
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
