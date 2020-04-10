import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from '@lukejamesk/core'

const Curtain = ({ onClick }) => {
  const Element = onClick !== undefined ? ButtonBase : 'div'
  return (
    <Element
      onClick={onClick}
      className="ljk-fixed ljk-w-full ljk-h-full ljk-bg-gray-900 ljk-opacity-50 ljk-inset-0"
    />
  )
}

Curtain.propTypes = {
  onClick: PropTypes.func,
}

export default Curtain
