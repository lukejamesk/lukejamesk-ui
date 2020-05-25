import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import Alert, { alertVariants } from './Alert'

export default {
  title: 'Design System/Alert',
  component: Alert,
}

export const Default = () => (
  <Alert variant={select('Variant', alertVariants, alertVariants[0])}>{text('text', 'My alert text')}</Alert>
)

export const Info = () => <Alert variant="info">{text('text', 'My alert text')}</Alert>

export const Error = () => <Alert variant="error">{text('text', 'My alert text')}</Alert>

export const Success = () => <Alert variant="success">{text('text', 'My alert text')}</Alert>
