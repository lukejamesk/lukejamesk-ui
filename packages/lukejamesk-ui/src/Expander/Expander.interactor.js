import { createInteractor } from '@lukejamesk/test-utils'
import ExpanderHeadInteractor from './ExpanderHead.interactor'
import ExpanderBodyInteractor from './ExpanderBody.interactor'

const expansionPanelElements = (wrapper) => ({
  header() {
    return ExpanderHeadInteractor(wrapper.find('ExpanderHead'))
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
