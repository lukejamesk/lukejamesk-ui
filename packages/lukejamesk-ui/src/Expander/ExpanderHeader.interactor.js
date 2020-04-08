import { createInteractor } from '@lukejamesk/test-utils'
import ButtonBaseInteractor from '../ButtonBase/ButtonBase.interactor'

const expanderHeaderElements = (wrapper) => ({
  header() {
    return ButtonBaseInteractor(wrapper.find('ButtonBase'))
  },
})

const expanderHeaderActions = (elements) => ({
  click() {
    elements.header().actions.click()
    return this
  },
})

const ExpanderHeaderInteractor = createInteractor(expanderHeaderElements, expanderHeaderActions, undefined)

export default ExpanderHeaderInteractor
