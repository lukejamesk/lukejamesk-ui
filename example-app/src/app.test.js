import React from 'react'
import { mount } from 'enzyme'
import {
  ThemeProvider,
  defaultTheme
} from '@lukejamesk-ui/styles'
import App from './app'

describe('<App />', () => {
  it('should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={defaultTheme}>
        <App name="Test" />
      </ThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
