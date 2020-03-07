import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useStyles } from '@lukejamesk/styles'

const variantMapping = {
  paragraph: 'p',
  bold: 'strong',
  blockquote: 'blockquote',
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  text: 'span',
}

const styles = (theme) => ({
  all: {
    color: 'inherit',
  },
  heading1: {
    fontSize: theme.typography.heading1.fontSize,
    fontFamily: theme.typography.heading1.fontFamily,
    fontWeight: theme.typography.heading1.fontWeight,
    '&:not(:last-child)': {
      marginBottom: theme.spacing.l,
    },
  },
  heading2: {
    fontSize: theme.typography.heading2.fontSize,
    fontFamily: theme.typography.heading2.fontFamily,
    fontWeight: theme.typography.heading2.fontWeight,
    '&:not(:last-child)': {
      marginBottom: theme.spacing.m,
    },
  },
  heading3: {
    fontSize: theme.typography.heading3.fontSize,
    fontFamily: theme.typography.heading3.fontFamily,
    fontWeight: theme.typography.heading3.fontWeight,
    '&:not(:last-child)': {
      marginBottom: theme.spacing.m,
    },
  },
  paragraph: {
    fontSize: theme.typography.fontSize,
    '&:not(:last-child)': {
      marginBottom: theme.spacing.m,
    },
  },
  bold: {
    fontWeight: theme.typography.bold,
  },
  blockquote: {
    fontSize: theme.typography.fontSize,
    fontStyle: 'italic',
    padding: `${theme.spacing.m}px`,
    borderLeft: `solid ${theme.spacing.xxs}px ${theme.palette.primary}`,
    borderRadius: 5,
    backgroundColor: theme.palette.light,
    '&:not(:last-child)': {
      marginBottom: theme.spacing.m,
    },
  },
})

const Typography = forwardRef(({ variant = 'text', className, paragraph = false, ...other }, ref) => {
  const classes = useStyles(styles)

  const Component = paragraph ? variantMapping.paragraph : variantMapping[variant]

  return (
    <Component
      className={clsx(classes.all, paragraph === true && classes.paragraph, classes[variant], className)}
      ref={ref}
      {...other}
    />
  )
})

Typography.displayName = 'Typography'

Typography.propTypes = {
  variant: PropTypes.oneOf(['paragraph', 'bold', 'blockquote', 'heading1', 'heading2', 'heading3', 'text']),
  paragraph: PropTypes.bool,
  className: PropTypes.string,
}

export default Typography
