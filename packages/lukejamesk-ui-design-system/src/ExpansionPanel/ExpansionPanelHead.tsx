import React, { useContext } from 'react'
import { ExpanderContext, ButtonBase, library } from '@lukejamesk/core'
import { arrowDown, arrowUp } from '@lukejamesk/icons'
import { Typography } from '../Typography'
import Icon from '../Icon'

library.add(arrowUp)
library.add(arrowDown)

const ExpansionPanelHead: React.FC = ({ children }) => {
  const { expanded, onChange, id } = useContext(ExpanderContext)

  return (
    <ButtonBase
      className="ljk-block ljk-flex ljk-pt-s ljk-pb-s ljk-w-full"
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

export default ExpansionPanelHead
