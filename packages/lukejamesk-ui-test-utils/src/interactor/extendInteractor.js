import { curry, compose } from 'ramda'
import mergeInteractor from './mergeInteractor'

const extendInteractor = curry((baseInteractor, elements, actions) => {
  return compose(mergeInteractor(elements, actions), baseInteractor)
})

export default extendInteractor
