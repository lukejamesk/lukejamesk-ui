import React, { useMemo } from 'react'
import { setRef } from '../util'

function useForkRef<T>(refA?: React.Ref<T>, refB?: React.Ref<T>): React.Ref<T> {
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null
    }
    return (refValue): void => {
      setRef(refA, refValue)
      setRef(refB, refValue)
    }
  }, [refA, refB])
}

export default useForkRef
