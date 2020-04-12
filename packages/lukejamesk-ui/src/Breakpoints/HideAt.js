import PropTypes from 'prop-types'
import { keys } from 'ramda'
import useBreakpoints from './useBreakpoints'

const HideAt = ({ bp, children }) => {
  const { currentBreakpoint, breakpoints } = useBreakpoints()
  const breakpoint = breakpoints[bp]

  if (breakpoint === undefined) {
    throw new Error(`Breakpoint ${bp} was not found in breakpoints ${breakpoints}`)
  }

  return breakpoint > currentBreakpoint[keys(currentBreakpoint)[0]] && children
}

HideAt.propTypes = {
  bp: PropTypes.string,
  children: PropTypes.node,
}

export default HideAt
