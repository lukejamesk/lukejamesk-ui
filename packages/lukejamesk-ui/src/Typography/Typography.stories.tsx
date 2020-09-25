import React from 'react'
import { text } from '@storybook/addon-knobs'
import Typography from './Typography'

const exampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas feugiat varius mi, eu sagittis nunc dignissim nec.
Quisque rhoncus hendrerit leo.`

export default {
  title: 'Core/Typography',
  component: Typography,
}

export const Paragraph: React.FC = () => <Typography>{text('text', exampleText)}</Typography>
export const Blockquote: React.FC = () => (
  <Typography variant="blockquote">{text('text', exampleText)}</Typography>
)
export const Bold: React.FC = () => <Typography variant="bold">{text('text', exampleText)}</Typography>
export const Heading1: React.FC = () => (
  <Typography variant="heading1">{text('text', 'Heading 1')}</Typography>
)
export const Heading2: React.FC = () => (
  <Typography variant="heading2">{text('text', 'Heading 2')}</Typography>
)
export const Heading3: React.FC = () => (
  <Typography variant="heading3">{text('text', 'Heading 3')}</Typography>
)
