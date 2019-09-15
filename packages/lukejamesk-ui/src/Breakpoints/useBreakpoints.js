import { useContext } from 'react'
import BreakpointsContext from './BreakpointsContext'

const useBreakpoints = () => useContext(BreakpointsContext)
export default useBreakpoints
