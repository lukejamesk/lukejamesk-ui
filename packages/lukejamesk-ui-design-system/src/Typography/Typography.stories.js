import React from 'react'
import { select, text } from '@storybook/addon-knobs'
import Typography, { typographyAlignments, typographyVariants } from './Typography'

const exampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas feugiat varius mi, eu sagittis nunc dignissim nec.
Quisque rhoncus hendrerit leo.`

export default {
  title: 'Design System/Typography',
  component: Typography,
}

export const Default = () => (
  <Typography
    variant={select('Variant', typographyVariants, typographyVariants[0])}
    align={select('Align', typographyAlignments, typographyAlignments[0])}
  >
    {exampleText}
  </Typography>
)

export const Paragraph = () => <Typography paragraph>{text('text', exampleText)}</Typography>
export const Blockquote = () => <Typography variant="blockquote">{text('text', exampleText)}</Typography>
export const Bold = () => <Typography variant="bold">{text('text', exampleText)}</Typography>
export const Heading1 = () => <Typography variant="heading1">{text('text', 'Heading 1')}</Typography>
export const Heading2 = () => <Typography variant="heading2">{text('text', 'Heading 2')}</Typography>
export const Heading3 = () => <Typography variant="heading3">{text('text', 'Heading 3')}</Typography>
