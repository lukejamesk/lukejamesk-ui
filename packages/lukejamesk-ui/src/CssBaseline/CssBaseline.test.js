import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider, defaultTheme } from '@lukejamesk-ui/styles'
import CssBaseline from './CssBaseline'

describe('<CssBaseline />', () => {
  it('should render its children', () => {
    const wrapper = mount(
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline>
          <div id="child">test</div>
        </CssBaseline>
      </ThemeProvider>
    )
    expect(wrapper.find('#child').length).toEqual(1)
  })
})
