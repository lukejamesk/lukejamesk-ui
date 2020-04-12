import { createInteractor } from '@lukejamesk/test-utils'
import ButtonBaseInteractor from '../ButtonBase/ButtonBase.interactor'

const expanderHeadElements = (wrapper) => ({
  header() {
    return ButtonBaseInteractor(wrapper.find('ButtonBase'))
  },
})

const expanderHeadActions = (elements) => ({
  click() {
    elements.header().actions.click()
    return this
  },
})

const ExpanderHeadInteractor = createInteractor(expanderHeadElements, expanderHeadActions, undefined)

export default ExpanderHeadInteractor
