import React from 'react'
import { text } from '@storybook/addon-knobs'
import DeleteButton from './DeleteButton'

export default {
  title: 'Design System|Buttons',
  component: DeleteButton,
}

export const Delete = () => <DeleteButton>{text('Text')}</DeleteButton>
