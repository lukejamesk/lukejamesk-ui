import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { Text } from '.'

const exampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas feugiat varius mi, eu sagittis nunc dignissim nec.
Quisque rhoncus hendrerit leo.`

storiesOf('Core|Typography/Text', module)
  .add('Paragraph', () => (
    <Text paragraph={boolean}>
      {text('text', exampleText)}
    </Text>
  ))
  .add('Blockquote', () => (
    <Text type="blockquote">
      {text('text', exampleText)}
    </Text>
  ))
  .add('Bold', () => (
    <Text type="bold">
      {text('text', exampleText)}
    </Text>
  ))
