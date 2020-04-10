import { useMemo } from 'react'
import { setRef } from '../util'

const useForkRef = (refA, refB) => {
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null
    }
    return (refValue) => {
      setRef(refA, refValue)
      setRef(refB, refValue)
    }
  }, [refA, refB])
}

export default useForkRef
