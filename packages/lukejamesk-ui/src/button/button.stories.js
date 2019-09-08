import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import Button from './button'

storiesOf('UI|Button', module)
  .add('Default', () => (
    <Button>
      {text('text', 'My Button')}
    </Button>
  ))
  .add('Primary', () => (
    <Button variant="primary">
      {text('text', 'My Button')}
    </Button>
  ))
  .add('Secondary', () => (
    <Button variant="secondary">
      {text('text', 'My Button')}
    </Button>
  ))
