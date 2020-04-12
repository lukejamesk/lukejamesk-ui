import React from 'react'
import PropTypes from 'prop-types'
import { Expander } from '@lukejamesk/core'

const ExpansionPanel = (props) => <Expander {...props} />

ExpansionPanel.propTypes = {
  children: PropTypes.node,
}
export default ExpansionPanel
