import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStyles } from '@lukejamesk/styles'
import clsx from 'clsx'

const styles = (theme) => ({
  primary: {
    '& svg *': {
      fill: theme.palette.primary,
    },
  },
  light: {
    '& svg *': {
      fill: theme.palette.light,
    },
  },
  dark: {
    '& svg *': {
      fill: theme.palette.dark,
    },
  },
  secondary: {
    '& svg *': {
      fill: theme.palette.secondary,
    },
  },
  s: {
    fontSize: theme.icons.s,
  },
  m: {
    fontSize: theme.icons.m,
  },
  l: {
    fontSize: theme.icons.l,
  },
  auto: {
    fontSize: 'inherit',
  },
})

const Icon = ({ name, variant = 'dark', size = 'auto' }) => {
  const classes = useStyles(styles)

  return (
    <span className={clsx(classes[variant], classes[size])}>
      <FontAwesomeIcon icon={name} />
    </span>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']),
  size: PropTypes.oneOf(['s', 'm', 'l', 'auto']),
}
export default Icon
