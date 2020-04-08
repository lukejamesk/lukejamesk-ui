import React from 'react'
import { keys } from 'ramda'
import { useBreakpoints } from '@lukejamesk/core'
import { View } from './Components'

const Debug = () => {
  const { currentBreakpoint } = useBreakpoints()
  return (
    <View className="ljk-fixed ljk-bottom-0 ljk-right-0 ljk-text-white ljk-bg-black ljk-py-1 ljk-px-m">
      {keys(currentBreakpoint)[0]}
    </View>
  )
}
export default Debug
