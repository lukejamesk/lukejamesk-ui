import { useState, useEffect } from 'react'

const useWindowSize = () => {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const [windowSize, setWindowSize] = useState(getSize)
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize())
    }
    window.addEventListener('resize', handleResize, { bubbles: true })

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
