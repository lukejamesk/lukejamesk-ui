import { createLoader } from '../util'

const tsLoader = config => createLoader(config)({
  test: /\.(tsx|ts)$/,
  exclude: /node_modules/,
  loader: 'ts-loader'
})

export default tsLoader
