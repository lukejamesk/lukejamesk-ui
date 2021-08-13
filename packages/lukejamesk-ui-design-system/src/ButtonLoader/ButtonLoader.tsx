import React, { forwardRef } from 'react'
import clsx from 'clsx'
import Button from '../Button'
import { Spinner } from '../Spinner'
import { ButtonRef, ButtonVariant } from '../Button/types'
import { ButtonLoaderProps } from './types'
import { SpinnerColor } from '../Spinner/types'

const buttonToSpinnerVariantMapping: Record<ButtonVariant, SpinnerColor> = {
  primary: 'light',
  secondary: 'primary',
  danger: 'light',
  default: 'dark',
}

const ButtonLoader = forwardRef<ButtonRef, ButtonLoaderProps>(
  ({ loading = false, children, variant = 'default', ...props }, ref) => (
    <Button {...props} disabled={loading} variant={variant} ref={ref}>
      <span className="ljk-relative">
        <span className={clsx({ 'ljk-opacity-0': loading })}>{children}</span>
        {loading && (
          <div className="ljk-absolute ljk-inset-0 ljk-flex ljk-items-center ljk-justify-center">
            <Spinner color={buttonToSpinnerVariantMapping[variant]} />
          </div>
        )}
      </span>
    </Button>
  ),
)

ButtonLoader.displayName = 'ButtonLoader'

export default ButtonLoader
