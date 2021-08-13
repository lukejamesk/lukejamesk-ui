import React from 'react'
import { text } from '@storybook/addon-knobs'
import Button from './Button'

export default {
  title: 'Design System/Button',
  component: Button,
}

export const Default: React.FC = () => <Button>{text('text', 'My Button')}</Button>
export const Primary: React.FC = () => <Button variant="primary">{text('text', 'My Button')}</Button>
export const Secondary: React.FC = () => <Button variant="secondary">{text('text', 'My Button')}</Button>
export const Danger: React.FC = () => <Button variant="danger">{text('text', 'My Button')}</Button>
