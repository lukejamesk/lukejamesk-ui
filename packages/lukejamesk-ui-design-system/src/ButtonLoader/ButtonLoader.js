import React from 'react'
import PropTypes from 'prop-types'
import { pathOr } from 'ramda'
import clsx from 'clsx'
import Button from '../Button'
import { Spinner } from '../Spinner'
import { buttonVariants } from '../Button/Button'

const buttonToSpinnerVariantMapping = {
  primary: 'light',
}
const ButtonLoader = ({ loading, children, variant, ...props }) => (
  <Button {...props} disabled={loading} variant={variant}>
    <span className="ljk-relative">
      <span className={clsx({ 'ljk-opacity-0': loading })}>{children}</span>
      {loading && (
        <div className="ljk-absolute ljk-inset-0 ljk-flex ljk-items-center ljk-justify-center">
          <Spinner color={pathOr('primary', [variant], buttonToSpinnerVariantMapping)} />
        </div>
      )}
    </span>
  </Button>
)

ButtonLoader.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
  variant: PropTypes.oneOf(buttonVariants),
}

ButtonLoader.defaultProps = {
  loading: false,
  children: null,
  variant: 'primary',
}

export default ButtonLoader
