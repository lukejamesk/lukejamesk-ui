import React from 'react'
import PropTypes from 'prop-types'

const ModalActions = ({ children }) => {
  return (
    <div className="ljk-m-m">
      <div className="ljk-text-right">{children}</div>
    </div>
  )
}

ModalActions.propTypes = {
  children: PropTypes.node,
}

export default ModalActions
