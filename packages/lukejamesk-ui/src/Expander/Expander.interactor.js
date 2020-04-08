import { createInteractor } from '@lukejamesk/test-utils'
import ExpanderHeaderInteractor from './ExpanderHeader.interactor'
import ExpanderBodyInteractor from './ExpanderBody.interactor'

const expansionPanelElements = (wrapper) => ({
  header() {
    return ExpanderHeaderInteractor(wrapper.find('ExpanderHeader'))
  },
  body() {
    return ExpanderBodyInteractor(wrapper.find('ExpanderBody'))
  },
})

const expansionPanelActions = (elements) => ({
  toggle() {
    elements.header().actions.click()
    return this
  },
})

const ExpansionPanelInteractor = createInteractor(expansionPanelElements, expansionPanelActions, undefined)

export default ExpansionPanelInteractor
