import React from 'react'
import PropTypes from 'prop-types'
import { compose, sortBy, toPairs, prop, fromPairs, findLast, curry } from 'ramda'
import BreakpointsContext from './BreakpointsContext'
import useWindowSize from '../hooks/useWindowSize'

const reorderBreakpoints = compose(fromPairs, sortBy(prop(1)), toPairs)

const bpHigherThan = curry((width, bp) => bp <= width)
const findMatchingBreakpoint = (width) =>
  compose(
    (bp) => ({
      [bp[0]]: bp[1],
    }),
    findLast(compose(bpHigherThan(width), prop(1))),
    toPairs,
    reorderBreakpoints,
  )

const Breakpoints = ({ breakpoints, children }) => {
  const { width } = useWindowSize()
  const currentBreakpoint = findMatchingBreakpoint(width)(breakpoints)

  const value = {
    breakpoints,
    currentBreakpoint,
  }

  return <BreakpointsContext.Provider value={value}>{children}</BreakpointsContext.Provider>
}

Breakpoints.propTypes = {
  breakpoints: PropTypes.objectOf(PropTypes.number),
  children: PropTypes.node,
}

export default Breakpoints
