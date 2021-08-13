import defaultTheme from '.'

describe('defaultTheme', () => {
  it('Snapshot', () => {
    expect(defaultTheme).toMatchSnapshot()
  })
})
