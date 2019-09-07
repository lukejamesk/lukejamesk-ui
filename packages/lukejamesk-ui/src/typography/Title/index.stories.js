import React from 'react'
import { storiesOf } from '@storybook/react'
import { Title } from '.'

storiesOf('Core|Typography/Title', module)
  .add('Heading 1', () => (
    <Title type="heading1">
      Heading 1
    </Title>
  ))
  .add('Heading 2', () => (
    <Title type="heading2">
      Heading 2
    </Title>
  ))
  .add('Heading 3', () => (
    <Title type="heading3">
      Heading 3
    </Title>
  ))
