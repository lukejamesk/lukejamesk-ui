import React from 'react'
import PropTypes from 'prop-types'
import {
  useStyles
} from '@lukejamesk-styles'
import {
  CssBaseline
} from '@lukejamesk-ui'
import {
  H1,
  P,
  B,
  Blockquote,
  PrimaryButton,
  View,
  SecondaryButton
} from './components'

const styles = theme => ({
  app: {
    padding: theme.spacing.m
  }
})

const App = ({ name }) => {
  const classes = useStyles(styles)
  return (
    <CssBaseline>
      <View className={classes.app}>
        <H1>{name}</H1>
        <P>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloribus perferendis molestiae.
        </P>
        <Blockquote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.&nbsp;
          <B>Doloribus perferendis molestiae.</B>
        </Blockquote>
        <View>
          <PrimaryButton>
            My Button
          </PrimaryButton>
          <SecondaryButton>Second action</SecondaryButton>
        </View>
      </View>
    </CssBaseline>
  )
}

App.propTypes = {
  name: PropTypes.string.isRequired
}

export default App
