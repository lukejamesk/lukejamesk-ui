import { createInteractor } from '@lukejamesk/test-utils'
import { ExpansionPanelHeadInteractor, ExpansionPanelBodyInteractor } from '@lukejamesk/core'

const expansionPanelElements = (wrapper) => ({
  header() {
    return ExpansionPanelHeadInteractor(wrapper.find('ExpansionPanelHead'))
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
