import React from 'react'
import { mount } from 'enzyme'
import Button from './button'
import { defaultTheme, ThemeProvider } from '@lukejamesk-styles'

describe('<Button />', () => {
  it('should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={defaultTheme}>
        <Button>
          My content for button
        </Button>
      </ThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
