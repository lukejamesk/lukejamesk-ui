import React from 'react'
import { render } from 'enzyme'
import { forEach } from 'ramda'
import { ThemeProvider, defaultTheme } from '@lukejamesk/styles'
import Typography from './Typography'

const textTypes = ['paragraph', 'bold', 'blockquote', 'heading1', 'heading2', 'heading3']

const Wrapper = (props) => <ThemeProvider theme={defaultTheme} {...props} />

describe('<Typography />', () => {
  forEach((type) => {
    it(`should render with: ${type}`, () => {
      const wrapper = render(
        <Wrapper>
          <Typography variant={type}>
            My content for
            {type}
          </Typography>
        </Wrapper>,
      )
      expect(wrapper).toMatchSnapshot()
    })
  }, textTypes)

  it('should render a paragraph when paragraph is true', () => {
    const wrapper = render(
      <Wrapper>
        <Typography paragraph>My content for paragraph</Typography>
      </Wrapper>,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('with no type', () => {
    const wrapper = render(
      <Wrapper>
        <Typography>My content for no text type</Typography>
      </Wrapper>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
