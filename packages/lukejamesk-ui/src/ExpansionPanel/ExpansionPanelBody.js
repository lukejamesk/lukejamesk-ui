import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@lukejamesk/styles'

const styles = (theme) => ({
  root: {
    padding: theme.spacing.m,
    backgroundColor: theme.palette.light,
    border: `solid 2px ${theme.palette.borderLight}`,
    borderRadius: '0 0 5px 5px',
  },
})

const ExpansionPanelBody = ({ children }) => {
  const classes = useStyles(styles)
  return <div className={classes.root}>{children}</div>
}

ExpansionPanelBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ExpansionPanelBody
