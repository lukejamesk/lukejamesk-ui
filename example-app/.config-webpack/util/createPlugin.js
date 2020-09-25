import { pathOr } from 'ramda'

export const createPlugin = config => plugin => ({
  ...config,
  plugins: [...pathOr([], ['plugins'], config), plugin]
})

export default createPlugin
