import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Breakpoints, ShowAt, HideAt, library } from '@lukejamesk/core'
import {
  Button,
  ButtonIcon,
  ExpansionPanel,
  Modal,
  CheckboxField,
  NumberInputField,
  TextInputField,
} from '@lukejamesk/design-system'
import { coffee } from '@lukejamesk/icons'
import { H1, H2, H3, P, B, Blockquote, PrimaryButton, View, SecondaryButton, Debug } from './components'

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
  const [modalOpened, setModalOpened] = useState(true)
  return (
    <>
      <H1>{name}</H1>
      <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus perferendis molestiae.</P>
      <Blockquote>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.&nbsp;
        <B>Doloribus perferendis molestiae.</B>
      </Blockquote>
      <View>
        <ButtonIcon variant="secondary" icon="coffee" onClick={() => setModalOpened(true)} />
        <PrimaryButton onClick={() => setModalOpened(true)}>My Button</PrimaryButton>
        <SecondaryButton onClick={() => setModalOpened(true)}>Second action</SecondaryButton>
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
        <ExpansionPanel id="App1" uncontrolled>
          <ExpansionPanel.Head>My expansion panel title</ExpansionPanel.Head>
          <ExpansionPanel.Body>
            <P>Lorem ipsum dolor sit amet, consectetur.</P>
            <P>Lorem ipsum dolor sit amet, consectetur.</P>
            <P>Lorem ipsum dolor sit amet, consectetur.</P>
          </ExpansionPanel.Body>
        </ExpansionPanel>
        <ExpansionPanel id="App2" uncontrolled>
          <ExpansionPanel.Head>
            My expansion panel title <ButtonIcon icon="coffee" element="span" />
          </ExpansionPanel.Head>
          <ExpansionPanel.Body>
            <P>Lorem ipsum dolor sit amet, consectetur.</P>
            <P>Lorem ipsum dolor sit amet, consectetur.</P>
            <P>Lorem ipsum dolor sit amet, consectetur.</P>
          </ExpansionPanel.Body>
        </ExpansionPanel>
      </View>
      <Modal open={modalOpened} onClose={() => setModalOpened(false)}>
        <Modal.Head>My modal content</Modal.Head>
        <Modal.Body>
          <H3>Fill out this form</H3>
          <ExpansionPanel id="App3" expanded uncontrolled>
            <ExpansionPanel.Head>Section 1</ExpansionPanel.Head>
            <ExpansionPanel.Body>
              <TextInputField name="Input1" label="Enter a value" uncontrolled required />
              <NumberInputField name="Input2" label="Enter a number" uncontrolled />
              <CheckboxField name="Input3" label="Check to confirm" uncontrolled />
            </ExpansionPanel.Body>
          </ExpansionPanel>
          <ExpansionPanel id="App4" uncontrolled>
            <ExpansionPanel.Head>Section 2</ExpansionPanel.Head>
            <ExpansionPanel.Body>
              <TextInputField name="Input4" label="Enter a value" uncontrolled />
              <NumberInputField name="Input4" label="Enter a number" uncontrolled />
            </ExpansionPanel.Body>
          </ExpansionPanel>
        </Modal.Body>
        <Modal.Actions>
          <Button onClick={() => setModalOpened(false)}>Cancel</Button>
          <PrimaryButton onClick={() => setModalOpened(false)}>Save</PrimaryButton>
        </Modal.Actions>
      </Modal>
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
