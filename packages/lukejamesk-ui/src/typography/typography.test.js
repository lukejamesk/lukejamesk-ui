import React from 'react'
import { mount } from 'enzyme'
import { forEach } from 'ramda'
import Typography from './typography'
import { ThemeProvider, defaultTheme } from '@lukejamesk-styles'

const textTypes = [
  'paragraph',
  'bold',
  'blockquote',
  'heading1',
  'heading2',
  'heading3'
]

const Wrapper = props => <ThemeProvider theme={defaultTheme} {...props} />

describe('<Typography />', () => {
  forEach((type) => {
    it(`should render with: ${type}`, () => {
      const wrapper = mount(
        <Wrapper>
          <Typography variant={type}>
            My content for
            {type}
          </Typography>
        </Wrapper>
      )
      expect(wrapper).toMatchSnapshot()
    })
  }, textTypes)

  it('should render a paragraph when paragraph is true', () => {
    const wrapper = mount(
      <Wrapper>
        <Typography paragraph>
          My content for paragraph
        </Typography>
      </Wrapper>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('with no type', () => {
    const wrapper = mount(
      <Wrapper>
        <Typography>
          My content for paragraph
        </Typography>
      </Wrapper>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
