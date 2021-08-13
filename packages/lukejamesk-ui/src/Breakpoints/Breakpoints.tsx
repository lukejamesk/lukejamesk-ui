import React from 'react'
import { compose, toPairs, findLast, curry } from 'ramda'
import BreakpointsContext from './BreakpointsContext'
import useWindowSize from '../hooks/useWindowSize'
import { Breakpoint, BreakpointPair, Breakpoints as BreakpointsType, BreakpointWidth } from './types'
import createBreakpoints from './createBreakpoints'
import valueFromPair from '../util/valueFromPair'

const bpHigherThan = curry((width: number, bp: BreakpointWidth) => bp <= width)

const findLastThatMatchesWidth = (width: number) => {
  const filter = compose<BreakpointPair, BreakpointWidth, boolean>(bpHigherThan(width), valueFromPair)

  const x = findLast<BreakpointPair>(filter) as (breakpoints: Required<BreakpointPair[]>) => BreakpointPair
  return x
}

const findMatchingBreakpoint = (width: number) => {
  const findLastForCurrentWidth = findLastThatMatchesWidth(width)

  return compose<BreakpointsType, BreakpointPair[], BreakpointPair, BreakpointsType>(
    (bp: BreakpointPair): Breakpoint => ({
      [bp[0]]: bp[1],
    }),
    findLastForCurrentWidth,
    toPairs,
  )
}

export type BreakpointsProps = React.PropsWithChildren<{
  breakpoints: BreakpointsType
}>

const Breakpoints: React.FC<BreakpointsProps> = ({ breakpoints, children }) => {
  const { width } = useWindowSize()
  const breakpointsCreated = createBreakpoints(breakpoints)
  const currentBreakpoint = findMatchingBreakpoint(width)(breakpointsCreated)

  const value = {
    breakpoints,
    currentBreakpoint,
  }

  return <BreakpointsContext.Provider value={value}>{children}</BreakpointsContext.Provider>
}

export default Breakpoints
