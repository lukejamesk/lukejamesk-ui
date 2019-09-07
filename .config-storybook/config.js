import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

const loadStories = () => {
  const req = require.context('../packages/', true, /stories\.js$/)
  req.keys().forEach(req)
}

addDecorator(withKnobs)
configure(loadStories, module)
