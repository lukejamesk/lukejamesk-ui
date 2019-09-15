import PropTypes from 'prop-types'
import { keys } from 'ramda'
import useBreakpoints from './useBreakpoints'

const HideAt = ({ bp, children }) => {
  const { currentBreakpoint, breakpoints } = useBreakpoints()
  const breakpoint = breakpoints[bp]

  if (!breakpoint) {
    throw new Error(`Breakpoint ${bp} was not found in breakpoints ${breakpoints}`)
  }

  return breakpoint > currentBreakpoint[keys(currentBreakpoint)[0]] && children
}

HideAt.propTypes = {
  breakpoints: PropTypes.objectOf(PropTypes.number),
  children: PropTypes.node
}

export default HideAt