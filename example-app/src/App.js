import React from 'react'
import PropTypes from 'prop-types'
import { CssBaseline, Breakpoints, ShowAt, HideAt, library } from '@lukejamesk/core'
import { ButtonIcon } from '@lukejamesk/design-system'
import { useStyles, ThemeProvider, defaultTheme } from '@lukejamesk/styles'
import { coffee } from '@lukejamesk/icons'
import { H1, H2, P, B, Blockquote, PrimaryButton, View, SecondaryButton, Debug } from './components'

library.add(coffee)

const styles = (theme) => ({
  app: {
    padding: theme.spacing.m,
  },
  showHideAtArea: {
    marginTop: theme.spacing.l,
  },
})

const App = ({ name }) => {
  const classes = useStyles(styles)
  return (
    <CssBaseline>
      <View className={classes.app}>
        <H1>{name}</H1>
        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus perferendis molestiae.</P>
        <Blockquote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.&nbsp;
          <B>Doloribus perferendis molestiae.</B>
        </Blockquote>
        <View>
          <ButtonIcon variant="secondary" icon="coffee" />
          <PrimaryButton>My Button</PrimaryButton>
          <SecondaryButton>Second action</SecondaryButton>
        </View>
        <View className={classes.showHideAtArea}>
          <ShowAt bp="m">
            <H2>This content only shows at medium at above</H2>
            <P>Lorem ipsum dolor sit amet, consectetur.</P>
          </ShowAt>
          <HideAt bp="m">
            <H2>This content only shows at below medium</H2>
          </HideAt>
        </View>
      </View>
      <Debug />
    </CssBaseline>
  )
}

const withAppWrapper = (Component) => (props) => (
  <Breakpoints breakpoints={defaultTheme.breakpoints}>
    <ThemeProvider theme={defaultTheme}>
      <Component {...props} />
    </ThemeProvider>
  </Breakpoints>
)

App.propTypes = {
  name: PropTypes.string.isRequired,
}

export default withAppWrapper(App)
