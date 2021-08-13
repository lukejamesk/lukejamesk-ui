import React from 'react'
import { keys } from 'ramda'
import { BreakpointName } from './types'
import useBreakpoints from './useBreakpoints'

type ShowAtProps = React.PropsWithChildren<{
  bp: BreakpointName
}>

const ShowAt: React.FC<ShowAtProps> = ({ bp, children }) => {
  const { currentBreakpoint, breakpoints } = useBreakpoints()

  const breakpoint = breakpoints[bp]

  if (!breakpoint) {
    throw new Error(`Breakpoint ${bp} was not found in breakpoints ${breakpoints}`)
  }

  return <>{breakpoint <= currentBreakpoint[keys(currentBreakpoint)[0]] && children}</>
}

export default ShowAt
