import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import ButtonLoader from './ButtonLoader'

export default {
  title: 'Design System/Button Loader',
  component: ButtonLoader,
}

export const Default = () => (
  <ButtonLoader loading={boolean('loading', true)} variant="primary">
    {text('text', 'My Button')}
  </ButtonLoader>
)
