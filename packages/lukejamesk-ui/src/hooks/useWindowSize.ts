import { useState, useEffect } from 'react'

export type WindowSize = {
  width: number
  height: number
}

const useWindowSize = (): WindowSize => {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const [windowSize, setWindowSize] = useState(getSize)
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize())
    }

    window.addEventListener<'resize'>('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
