import createPlugin from './createPlugin'

class TestPlugin { }

describe('createPlugin', () => {
  it('can add a plugin when no plugins exist yet', () => {
    const returnedConfig = createPlugin({})(new TestPlugin())
    expect(returnedConfig).toEqual({
      plugins: [new TestPlugin()]
    })
  })

  it('can add a plugin when exists', () => {
    const returnedConfig = createPlugin({
      plugins: [new TestPlugin()]
    })(new TestPlugin())
    expect(returnedConfig).toEqual({
      plugins: [new TestPlugin(), new TestPlugin()]
    })
  })
})
