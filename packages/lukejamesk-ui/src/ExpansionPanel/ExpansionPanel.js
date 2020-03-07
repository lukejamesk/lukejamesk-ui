import React, { Children, useCallback, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import ExpansionPanelContext from './ExpansionPanelContext'

const ExpansionPanel = ({ id, expanded: expandedProp, controlled, onChange, children }) => {
  const [title, body] = Children.toArray(children)
  const [expandedState, setIsExpanded] = useState(expandedProp)
  const expanded = controlled ? expandedProp : expandedState

  const handleChange = useCallback(() => {
    if (!controlled) {
      setIsExpanded(!expanded)
    }
    onChange(!expanded)
  }, [expanded, controlled, onChange])

  const panelContext = useMemo(
    () => ({
      onChange: handleChange,
      expanded,
      id,
    }),
    [onChange, expanded, id],
  )

  return (
    <div>
      <ExpansionPanelContext.Provider value={panelContext}>{title}</ExpansionPanelContext.Provider>
      {expanded && (
        <div aria-labelledby={id && `ExpansionPanelHead-${id}`}>
          <div role="region">{body}</div>
        </div>
      )}
    </div>
  )
}

ExpansionPanel.propTypes = {
  id: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  onChange: PropTypes.func,
  controlled: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

ExpansionPanel.defaultProps = {
  expanded: false,
  onChange: () => {},
  controlled: false,
}

export default ExpansionPanel
