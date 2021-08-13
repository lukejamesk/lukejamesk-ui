import { createContext } from 'react'
import { Breakpoint, Breakpoints } from './types'

export type BPContext = {
  currentBreakpoint: Breakpoint
  breakpoints: Breakpoints
}

const BreakpointsContext = createContext<BPContext>({} as BPContext)

export default BreakpointsContext
