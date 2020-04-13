import React from 'react'
import Portal from './Portal'
import Typography from '../Typography'

export default {
  title: 'Core/Portal',
  component: Portal,
}

export const Default = () => (
  <>
    <Portal>
      <Typography variant="blockquote">
        This component has been rendered under the body tag (check inspector)
      </Typography>
    </Portal>
  </>
)
