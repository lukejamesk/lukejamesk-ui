import React, { forwardRef } from 'react'
import { FormControl as FormControlCore, FormControlProps, FormControlRef } from '@lukejamesk/core'

const FormControl = forwardRef<FormControlRef, FormControlProps>((props, ref) => (
  <FormControlCore className="ljk-mb-m last:ljk-mb-0" {...props} ref={ref} />
))

FormControl.displayName = 'FormControl'

export default FormControl
