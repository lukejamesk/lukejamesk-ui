import React from 'react'
import InputLabel from './InputLabel'

export default {
  title: 'Design System|Forms/Input Label',
  component: InputLabel,
}

export const Default = () => <InputLabel for="storybook">My label</InputLabel>
export const Required = () => (
  <InputLabel for="storybook" required>
    My label
  </InputLabel>
)
