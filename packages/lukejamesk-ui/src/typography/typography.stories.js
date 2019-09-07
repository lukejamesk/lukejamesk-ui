import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import Typography from './typography'

const exampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas feugiat varius mi, eu sagittis nunc dignissim nec.
Quisque rhoncus hendrerit leo.`

storiesOf('UI|Typography', module)
  .add('Paragraph', () => (
    <Typography paragraph={boolean}>
      {text('text', exampleText)}
    </Typography>
  ))
  .add('Blockquote', () => (
    <Typography type="blockquote">
      {text('text', exampleText)}
    </Typography>
  ))
  .add('Bold', () => (
    <Typography type="bold">
      {text('text', exampleText)}
    </Typography>
  ))
  .add('Heading 1', () => (
    <Typography type="heading1">
      {text('text', 'Heading 1')}
    </Typography>
  ))
  .add('Heading 2', () => (
    <Typography type="heading2">
      {text('text', 'Heading 2')}
    </Typography>
  ))
  .add('Heading 3', () => (
    <Typography type="heading3">
      {text('text', 'Heading 3')}
    </Typography>
  ))
