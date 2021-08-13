import React, { Children, useCallback, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import ExpanderContext from './ExpanderContext'
import { ExpanderProps } from './types'

const Expander: React.FunctionComponent<ExpanderProps> = ({
  id,
  expanded: expandedProp = false,
  uncontrolled = false,
  onChange = () => {},
  children,
}) => {
  const [title, body] = Children.toArray(children)
  const [expandedState, setIsExpanded] = useState(expandedProp)
  const expanded = !uncontrolled ? expandedProp : expandedState

  const handleChange = useCallback(() => {
    if (uncontrolled) {
      setIsExpanded(!expanded)
    }
    onChange(!expanded)
  }, [expanded, uncontrolled, onChange])

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
      <ExpanderContext.Provider value={panelContext}>{title}</ExpanderContext.Provider>
      {expanded && (
        <div aria-labelledby={id && `ExpanderHead-${id}`}>
          <div role="region">{body}</div>
        </div>
      )}
    </div>
  )
}

Expander.propTypes = {
  id: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  onChange: PropTypes.func,
  uncontrolled: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Expander
