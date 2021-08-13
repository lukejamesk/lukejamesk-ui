import { pathOr } from 'ramda'

const createLoader = config => loader => ({
  ...config,
  module: {
    rules: [
      ...pathOr([], ['module', 'rules'], config),
      loader
    ]
  }
})

export default createLoader
