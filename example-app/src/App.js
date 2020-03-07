import React from 'react'
import PropTypes from 'prop-types'
import {
  CssBaseline,
  Breakpoints,
  ShowAt,
  HideAt,
  library,
  ExpansionPanel,
  ExpansionPanelHeader,
  ExpansionPanelBody,
} from '@lukejamesk/core'
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
const darkTheme = {
  ...defaultTheme,
  palette: {
    backgroundColor: '#222',
    primary: '#39c5ff',
    secondary: '#5c946e',
    light: '#444',
    borderLight: '#333',
    dark: '#ddd',
    text: 'rgba(210, 210, 210, .9)',
  },
}

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
        <View>
          <ExpansionPanel id="App1">
            <ExpansionPanelHeader>My expansion panel title</ExpansionPanelHeader>
            <ExpansionPanelBody>
              <P>Lorem ipsum dolor sit amet, consectetur.</P>
              <P>Lorem ipsum dolor sit amet, consectetur.</P>
              <P>Lorem ipsum dolor sit amet, consectetur.</P>
            </ExpansionPanelBody>
          </ExpansionPanel>
        </View>
        <View>
          <ExpansionPanel id="App2">
            <ExpansionPanelHeader>
              My expansion panel title <ButtonIcon icon="coffee" />
            </ExpansionPanelHeader>
            <ExpansionPanelBody>
              <P>Lorem ipsum dolor sit amet, consectetur.</P>
              <P>Lorem ipsum dolor sit amet, consectetur.</P>
              <P>Lorem ipsum dolor sit amet, consectetur.</P>
            </ExpansionPanelBody>
          </ExpansionPanel>
        </View>
      </View>
      <Debug />
    </CssBaseline>
  )
}

const withAppWrapper = (Component) => ({ theme = 'light', ...props }) => (
  <Breakpoints breakpoints={defaultTheme.breakpoints}>
    <ThemeProvider theme={theme === 'light' ? defaultTheme : darkTheme}>
      <Component {...props} />
    </ThemeProvider>
  </Breakpoints>
)

App.propTypes = {
  name: PropTypes.string.isRequired,
}

export default withAppWrapper(App)
