import { createInteractor } from '@lukejamesk/test-utils'
import { ButtonBaseInteractor } from '@lukejamesk/core'

const expansionPanelHeadElements = (wrapper) => ({
  header() {
    return ButtonBaseInteractor(wrapper.find('ButtonBase'))
  },
})

const expansionPanelHeadActions = (elements) => ({
  click() {
    elements.header().actions.click()
    return this
  },
})

const ExpansionPanelHeadInteractor = createInteractor(
  expansionPanelHeadElements,
  expansionPanelHeadActions,
  undefined,
)

export default ExpansionPanelHeadInteractor
