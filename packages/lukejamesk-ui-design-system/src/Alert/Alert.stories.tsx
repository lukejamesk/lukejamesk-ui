import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { text, select } from '@storybook/addon-knobs'
import Alert from './Alert'
import { AlertType } from './types'

export default {
  title: 'Design System/Alert',
  component: Alert,
}

const variants: AlertType[] = ['info', 'error', 'success']

export const Default: Story = () => (
  <Alert variant={select('Variant', variants, variants[0])}>{text('text', 'My alert text')}</Alert>
)

export const Info: Story = () => <Alert variant="info">{text('text', 'My alert text')}</Alert>

export const Error: Story = () => <Alert variant="error">{text('text', 'My alert text')}</Alert>

export const Success: Story = () => <Alert variant="success">{text('text', 'My alert text')}</Alert>
