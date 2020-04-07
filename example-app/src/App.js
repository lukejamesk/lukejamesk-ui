import React from 'react'
import PropTypes from 'prop-types'
import {
  Breakpoints,
  ShowAt,
  HideAt,
  library,
  ExpansionPanel,
  ExpansionPanelHeader,
  ExpansionPanelBody,
} from '@lukejamesk/core'
import { ButtonIcon } from '@lukejamesk/design-system'
import { coffee } from '@lukejamesk/icons'
import { H1, H2, P, B, Blockquote, PrimaryButton, View, SecondaryButton, Debug } from './components'

library.add(coffee)

const breakpoints = {
  xxs: 0,
  xs: 320,
  s: 480,
  m: 768,
  l: 1280,
  xl: 1920,
  xxl: 2560,
}

const App = ({ name }) => {
  return (
    <>
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
      <View>
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
      <Debug />
    </>
  )
}

const withAppWrapper = (Component) => ({ ...props }) => (
  <Breakpoints breakpoints={breakpoints}>
    <Component {...props} />
  </Breakpoints>
)

App.propTypes = {
  name: PropTypes.string.isRequired,
}

export default withAppWrapper(App)
