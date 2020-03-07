import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@lukejamesk/styles'
import ExpansionPanelContext from './ExpansionPanelContext'
import ButtonBase from '../ButtonBase'
import Icon from '../Icon'
import Typography from '../Typography'

const styles = (theme) => ({
  root: {
    backgroundColor: 'transparent',
    textDecoration: 'none',
    color: 'inherit',
    padding: theme.spacing.m,
    margin: 0,
    width: '100%',
    border: 'none',
    borderBottom: `solid 2px ${theme.palette.dark}`,
    textAlign: 'left',
    display: 'flex',
    outline: 'none',
  },
  title: {
    alignSelf: 'center',
    width: '100%',
  },
  indicator: {
    alignSelf: 'center',
    marginRight: theme.spacing.m,
  },
})

const ExpansionPanelHeader = ({ children }) => {
  const { expanded, onChange, id } = useContext(ExpansionPanelContext)
  const classes = useStyles(styles)

  return (
    <ButtonBase
      onClick={onChange}
      aria-expanded={expanded}
      id={id && `ExpansionPanelHead-${id}`}
      aria-controls={id && `ExpansionPanelBody-${id}`}
      className={classes.root}
    >
      <div className={classes.indicator}>
        <Typography variant="heading3">
          <Icon name={expanded ? 'arrow-up' : 'arrow-down'} />
        </Typography>
      </div>
      <div className={classes.title}>
        <Typography variant="heading3">{children}</Typography>
      </div>
    </ButtonBase>
  )
}

ExpansionPanelHeader.propTypes = {
  children: PropTypes.node,
}

export default ExpansionPanelHeader
