import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Typography, Button } from '@lukejamesk/core'

export const B = (props) => <Typography variant="bold" {...props} />
export const P = (props) => <Typography paragraph {...props} />
export const H1 = (props) => <Typography variant="heading1" {...props} />
export const H2 = (props) => <Typography variant="heading2" {...props} />
export const Blockquote = (props) => <Typography variant="blockquote" {...props} />
export const PrimaryButton = (props) => <Button variant="primary" {...props} />
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />

export const View = ({ className, ...props }) => <div className={clsx(className, 'mt-4')} {...props} />
View.propTypes = {
  className: PropTypes.string,
}
View.defaultProps = {
  className: null,
}
