import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ name, className }) => {
  return <FontAwesomeIcon icon={name} className={className} />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Icon
