import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ExpanderContext, ButtonBase, Icon, Typography, library } from '@lukejamesk/core'
import { arrowDown, arrowUp } from '@lukejamesk/icons'

library.add(arrowUp)
library.add(arrowDown)

const ExpansionPanelHeader = ({ children }) => {
  const { expanded, onChange, id } = useContext(ExpanderContext)

  return (
    <ButtonBase
      className="ljk-block ljk-flex ljk-border-b-2 ljk-border-black ljk-p-s ljk-w-full"
      onClick={onChange}
      aria-expanded={expanded}
      id={id && `ExpansionPanelHead-${id}`}
      aria-controls={id && `ExpansionPanelBody-${id}`}
    >
      <div className="ljk-mr-m ljk-self-center">
        <Typography variant="heading3">
          <Icon name={expanded ? 'arrow-up' : 'arrow-down'} />
        </Typography>
      </div>
      <div className="ljk-self-center">
        <Typography variant="heading3">{children}</Typography>
      </div>
    </ButtonBase>
  )
}

ExpansionPanelHeader.propTypes = {
  children: PropTypes.node,
}

export default ExpansionPanelHeader
