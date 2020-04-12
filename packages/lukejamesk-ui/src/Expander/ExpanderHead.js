import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ButtonBase from '../ButtonBase'
import ExpanderContext from './ExpanderContext'

const ExpanderHead = ({ className, children }) => {
  const { expanded, onChange, id } = useContext(ExpanderContext)

  return (
    <ButtonBase
      className={className}
      onClick={onChange}
      aria-expanded={expanded}
      id={id && `Expander-${id}`}
      aria-controls={id && `Expander-${id}`}
    >
      {children}
    </ButtonBase>
  )
}

ExpanderHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default ExpanderHead
