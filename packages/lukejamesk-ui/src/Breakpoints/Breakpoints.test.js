import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import { setWindowWidth, changeWindowWidth } from '@lukejamesk/test-utils'
import Breakpoints from './Breakpoints'
import BreakpointsContext from './BreakpointsContext'

const defaultBreakpoints = {
  s: 0,
  m: 768,
  l: 1920,
}

describe('<Breakpoints />', () => {
  const initialWidth = global.innerWidth
  it('should provide the current breakpoint and breakpoints to the context', () => {
    setWindowWidth(defaultBreakpoints.l)
    const wrapper = mount(
      <Breakpoints breakpoints={defaultBreakpoints}>
        <BreakpointsContext.Consumer>
          {({ currentBreakpoint, breakpoints }) => JSON.stringify({ currentBreakpoint, breakpoints })}
        </BreakpointsContext.Consumer>
      </Breakpoints>,
    )

    expect(wrapper.html()).toEqual(
      JSON.stringify({ currentBreakpoint: { l: defaultBreakpoints.l }, breakpoints: defaultBreakpoints }),
    )
  })

  it('should provide the new breakpoint when the viewport changes', () => {
    setWindowWidth(defaultBreakpoints.l)
    const wrapper = mount(
      <Breakpoints breakpoints={defaultBreakpoints}>
        <BreakpointsContext.Consumer>
          {({ currentBreakpoint, breakpoints }) => JSON.stringify({ currentBreakpoint, breakpoints })}
        </BreakpointsContext.Consumer>
      </Breakpoints>,
    )

    expect(wrapper.html()).toEqual(
      JSON.stringify({ currentBreakpoint: { l: defaultBreakpoints.l }, breakpoints: defaultBreakpoints }),
    )

    act(() => {
      changeWindowWidth(defaultBreakpoints.s)
    })

    wrapper.update()

    expect(wrapper.html()).toEqual(
      JSON.stringify({ currentBreakpoint: { s: defaultBreakpoints.s }, breakpoints: defaultBreakpoints }),
    )
  })

  afterEach(() => {
    global.innerWidth = initialWidth
  })
})
