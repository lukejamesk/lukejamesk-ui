import React from 'react'
import { text } from '@storybook/addon-knobs'
import Button from './Button'

export default {
  title: 'Design System/Button',
  component: Button,
}

export const Default = () => <Button>{text('text', 'My Button')}</Button>
export const Primary = () => <Button variant="primary">{text('text', 'My Button')}</Button>
export const Secondary = () => <Button variant="secondary">{text('text', 'My Button')}</Button>
export const Danger = () => <Button variant="danger">{text('text', 'My Button')}</Button>
