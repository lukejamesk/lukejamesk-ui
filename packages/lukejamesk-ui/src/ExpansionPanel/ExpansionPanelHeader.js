import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ExpansionPanelContext from './ExpansionPanelContext'
import ButtonBase from '../ButtonBase'
import Icon from '../Icon'
import Typography from '../Typography'

const ExpansionPanelHeader = ({ children }) => {
  const { expanded, onChange, id } = useContext(ExpansionPanelContext)

  return (
    <ButtonBase
      className="block flex border-b-2 border-black p-2 w-full"
      onClick={onChange}
      aria-expanded={expanded}
      id={id && `ExpansionPanelHead-${id}`}
      aria-controls={id && `ExpansionPanelBody-${id}`}
    >
      <div className="mr-4 self-center">
        <Typography variant="heading3">
          <Icon name={expanded ? 'arrow-up' : 'arrow-down'} />
        </Typography>
      </div>
      <div className=" self-center">
        <Typography variant="heading3">{children}</Typography>
      </div>
    </ButtonBase>
  )
}

ExpansionPanelHeader.propTypes = {
  children: PropTypes.node,
}

export default ExpansionPanelHeader
