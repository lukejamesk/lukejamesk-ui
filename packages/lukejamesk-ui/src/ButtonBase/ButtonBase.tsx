import React from 'react'
import PropTypes from 'prop-types'

export interface ButtonBaseProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  element?: string | React.FunctionComponent<React.HTMLProps<HTMLButtonElement>>
}

const ButtonBase: React.FunctionComponent<ButtonBaseProps> = ({
  children,
  className,
  element: Element = 'button',
  ...props
}) => {
  return (
    <Element type="button" className={className} tabIndex={0} {...props}>
      {children}
    </Element>
  )
}

ButtonBase.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
}

export default ButtonBase
