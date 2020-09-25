import React from 'react'
import { keys } from 'ramda'
import useBreakpoints from './useBreakpoints'
import { BreakpointName } from './types'

export type HideAtProps = React.PropsWithChildren<{
  bp: BreakpointName
}>

const HideAt: React.FC<HideAtProps> = ({ bp, children }) => {
  const { currentBreakpoint, breakpoints } = useBreakpoints()
  const breakpoint = breakpoints[bp]
  if (breakpoint === undefined) {
    throw new Error(`Breakpoint ${bp} was not found in breakpoints ${breakpoints}`)
  }

  const breakpointKeys = keys(currentBreakpoint)
  return <>{breakpoint > currentBreakpoint[breakpointKeys[0]] && children}</>
}

export default HideAt
