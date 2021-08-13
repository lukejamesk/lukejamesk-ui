import React from 'react'
import InputLabel from './InputLabel'

export default {
  title: 'Design System/Forms/Input Label',
  component: InputLabel,
}

export const Default: React.FC = () => <InputLabel for="storybook">My label</InputLabel>
export const Required: React.FC = () => (
  <InputLabel for="storybook" required>
    My label
  </InputLabel>
)
