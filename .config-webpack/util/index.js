import { pathOr } from 'ramda'

export const createPlugin = config => plugin => ({
  ...config,
  plugins: [
    ...pathOr([], ['config', 'plugins'], config),
    plugin
  ]
})

export const createLoader = config => loader => ({
  ...config,
  module: {
    rules: [
      ...pathOr([], ['config', 'modules', 'rules'], config),
      loader
    ]
  }
})
