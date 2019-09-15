import React from 'react'
import { keys } from 'ramda'
import { useBreakpoints } from '@lukejamesk-ui/core'
import { useStyles } from '@lukejamesk-ui/styles'
import { View } from './Components'

const styles = ({
  debug: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    background: 'black',
    color: 'white',
    opacity: '.5',
    padding: '5px 10px',
    display: 'inline-block'
  }
})

const Debug = () => {
  const { currentBreakpoint } = useBreakpoints()
  const classes = useStyles(styles)
  return (
    <View className={classes.debug}>
      {keys(currentBreakpoint)[0]}
    </View>
  )
}
export default Debug
