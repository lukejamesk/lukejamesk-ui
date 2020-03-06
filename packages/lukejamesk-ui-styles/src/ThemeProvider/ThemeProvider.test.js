import React, { createRef } from 'react'
import { mount } from 'enzyme'
import ThemeProvider from './ThemeProvider'
import useTheme from '../useTheme'

const testTheme = {
  test: 'red',
}

describe('<ThemeProvider />', () => {
  it('Should provider theme to child components', () => {
    const ref = createRef()
    const text = () => ref.current.textContent
    const Test = () => {
      const theme = useTheme()
      return <span ref={ref}>{theme.test}</span>
    }

    mount(
      <ThemeProvider theme={testTheme}>
        <Test />
      </ThemeProvider>,
    )

    expect(text()).toEqual(testTheme.test)
  })
})
