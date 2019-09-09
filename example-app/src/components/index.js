import React from 'react'
import {
  Typography,
  Button
} from '@lukejamesk-ui/core'

export const B = props => <Typography variant="bold" {...props} />
export const P = props => <Typography paragraph {...props} />
export const H1 = props => <Typography variant="heading1" {...props} />
export const Blockquote = props => <Typography variant="blockquote" {...props} />
export const PrimaryButton = props => <Button variant="primary" {...props} />
export const SecondaryButton = props => <Button variant="secondary" {...props} />

export const View = props => <div {...props} />
