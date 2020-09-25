import { useContext } from 'react'
import BreakpointsContext, { BPContext } from './BreakpointsContext'

function useBreakpoints(): BPContext {
  return useContext<BPContext>(BreakpointsContext)
}

export default useBreakpoints
