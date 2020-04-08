import { createInteractor } from '@lukejamesk/test-utils'

const expanderBodyElements = (wrapper) => ({
  body() {
    return wrapper
  },
})

const expanderBodyActions = () => ({})

const ExpanderBodyInteractor = createInteractor(expanderBodyElements, expanderBodyActions, undefined)

export default ExpanderBodyInteractor
