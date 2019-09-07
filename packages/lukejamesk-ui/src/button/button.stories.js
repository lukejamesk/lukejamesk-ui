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
