import React from 'react'
import { select, text } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import Typography from './Typography'
import { TypographyAlignment, TypographyVariant } from './types'

const exampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas feugiat varius mi, eu sagittis nunc dignissim nec.
Quisque rhoncus hendrerit leo.`

export default {
  title: 'Design System/Typography',
  component: Typography,
}

const typographyVariants: TypographyVariant[] = [
  'text',
  'paragraph',
  'heading1',
  'heading2',
  'heading3',
  'bold',
  'blockquote',
]

const typographyAlignments: TypographyAlignment[] = ['auto', 'left', 'right', 'center', 'justify']

export const Default: Story = () => (
  <Typography
    variant={select('Variant', typographyVariants, typographyVariants[0])}
    align={select('Align', typographyAlignments, typographyAlignments[0])}
  >
    {exampleText}
  </Typography>
)

export const Paragraph: Story = () => <Typography paragraph>{text('text', exampleText)}</Typography>
export const Blockquote: Story = () => (
  <Typography variant="blockquote">{text('text', exampleText)}</Typography>
)
export const Bold: Story = () => <Typography variant="bold">{text('text', exampleText)}</Typography>
export const Heading1: Story = () => <Typography variant="heading1">{text('text', 'Heading 1')}</Typography>
export const Heading2: Story = () => <Typography variant="heading2">{text('text', 'Heading 2')}</Typography>
export const Heading3: Story = () => <Typography variant="heading3">{text('text', 'Heading 3')}</Typography>
