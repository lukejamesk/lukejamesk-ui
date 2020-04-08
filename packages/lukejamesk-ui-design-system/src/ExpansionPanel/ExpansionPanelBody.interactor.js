import { createInteractor } from '@lukejamesk/test-utils'

const expansionPanelBodyElements = (wrapper) => ({
  body() {
    return wrapper
  },
})

const expansionPanelBodyActions = () => ({})

const ExpansionPanelBodyInteractor = createInteractor(
  expansionPanelBodyElements,
  expansionPanelBodyActions,
  undefined,
)

export default ExpansionPanelBodyInteractor
