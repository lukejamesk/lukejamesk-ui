import { createInteractor } from '@lukejamesk/test-utils'
import ExpansionPanelHeaderInteractor from './ExpansionPanelHeader.interactor'
import ExpansionPanelBodyInteractor from './ExpansionPanelBody.interactor'

const expansionPanelElements = (wrapper) => ({
  header() {
    return ExpansionPanelHeaderInteractor(wrapper.find('ExpansionPanelHeader'))
  },
  body() {
    return ExpansionPanelBodyInteractor(wrapper.find('ExpansionPanelBody'))
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
