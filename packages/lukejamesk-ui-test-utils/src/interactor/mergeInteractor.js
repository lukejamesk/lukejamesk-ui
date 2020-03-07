import { curry } from 'ramda'

const mergeInteractor = curry((elements, actions, interactor) => {
  const { elements: baseEls, actions: baseActions, ...restInteractor } = interactor

  const newElements = {
    ...baseEls,
    ...elements(restInteractor.wrapper),
  }

  const newActions = {
    ...baseActions,
    ...actions(newElements),
  }
  return {
    elements: newElements,
    actions: newActions,
    ...restInteractor,
  }
})

export default mergeInteractor
