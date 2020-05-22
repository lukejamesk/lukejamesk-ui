import React from 'react'
import PropTypes from 'prop-types'

const sizeMapping = {
  s: 'ljk-spinner-s',
  m: 'ljk-spinner-m',
  l: 'ljk-spinner-l',
}

export const spinnerSizes = ['s', 'm', 'l']

const Spinner = ({ size }) => <span className={sizeMapping[size]} />

Spinner.propTypes = {
  size: PropTypes.oneOf(spinnerSizes),
}
Spinner.defaultProps = {
  size: 'm',
}

export default Spinner
