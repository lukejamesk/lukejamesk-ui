import { compose, values, any, equals, sortBy, toPairs, fromPairs } from 'ramda'
import { BreakpointPair, Breakpoints } from './types'
import valueFromPair from '../util/valueFromPair'

const objectHasValue = (value: unknown) => {
  const predicate = equals(value)
  return compose<{ [key: string]: unknown }, unknown[], boolean>(any(predicate), values)
}

const bpHas0 = objectHasValue(0)

const reorderBreakpoints = compose<Breakpoints, Array<BreakpointPair>, Array<BreakpointPair>, Breakpoints>(
  fromPairs,
  sortBy(valueFromPair),
  toPairs,
)

const createBreakpoints = (breakpoints: Breakpoints): Breakpoints => {
  const has0 = bpHas0(breakpoints)

  if (!has0) {
    throw new Error('Breakpoints should contain at least 1 key with value 0.')
  }

  return reorderBreakpoints(breakpoints)
}

export default createBreakpoints
