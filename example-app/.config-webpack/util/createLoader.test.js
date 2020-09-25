import createLoader from './createLoader'

class TestLoader { }

describe('createLoader', () => {
  it('can add a loader when no loaders exist yet', () => {
    const returnedConfig = createLoader({})(new TestLoader())
    expect(returnedConfig).toEqual({
      module: {
        rules: [new TestLoader()]
      }
    })
  })

  it('can add a loader when exists', () => {
    const returnedConfig = createLoader({
      module: {
        rules: [new TestLoader()]
      }
    })(new TestLoader())

    expect(returnedConfig).toEqual({
      module: {
        rules: [new TestLoader(), new TestLoader()]
      }
    })
  })
})
