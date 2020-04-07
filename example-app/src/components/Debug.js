import React from 'react'
import { keys } from 'ramda'
import { useBreakpoints } from '@lukejamesk/core'
import { View } from './Components'

const Debug = () => {
  const { currentBreakpoint } = useBreakpoints()
  return (
    <View className="fixed bottom-0 right-0 text-white bg-black py-1 px-4">{keys(currentBreakpoint)[0]}</View>
  )
}
export default Debug
