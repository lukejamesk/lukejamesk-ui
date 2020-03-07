import React from 'react'
import { arrowDown, arrowUp } from '@lukejamesk/icons'
import { defaultTheme, ThemeProvider } from '@lukejamesk/styles'
import ExpansionPanelInteractor from './ExpansionPanel.interactor'
import ExpansionPanel from './ExpansionPanel'
import ExpansionPanelHeader from './ExpansionPanelHeader'
import ExpansionPanelBody from './ExpansionPanelBody'

import library from '../library'

library.add(arrowDown)
library.add(arrowUp)

describe('<ExpansionPanel />', () => {
  it('should allow to only mount children when it is expanded', () => {
    const interactor = ExpansionPanelInteractor(
      <ThemeProvider theme={defaultTheme}>
        <ExpansionPanel id="test">
          <ExpansionPanelHeader>My title</ExpansionPanelHeader>
          <ExpansionPanelBody>My body</ExpansionPanelBody>
        </ExpansionPanel>
      </ThemeProvider>,
    )
    expect(interactor.elements.body().elements.body().length).toEqual(0)
    interactor.actions.toggle()
    expect(interactor.elements.body().elements.body().length > 0).toEqual(true)
  })
})
