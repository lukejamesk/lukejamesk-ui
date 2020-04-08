import { createInteractor } from '@lukejamesk/test-utils'
import { ButtonBaseInteractor } from '@lukejamesk/core'

const expansionPanelHeaderElements = (wrapper) => ({
  header() {
    return ButtonBaseInteractor(wrapper.find('ButtonBase'))
  },
})

const expansionPanelHeaderActions = (elements) => ({
  click() {
    elements.header().actions.click()
    return this
  },
})

const ExpansionPanelHeaderInteractor = createInteractor(
  expansionPanelHeaderElements,
  expansionPanelHeaderActions,
  undefined,
)

export default ExpansionPanelHeaderInteractor
