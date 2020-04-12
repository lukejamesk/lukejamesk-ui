import React, { forwardRef } from 'react'
import { FormControl as FormControlCore } from '@lukejamesk/core'

const FormControl = forwardRef((props, ref) => (
  <FormControlCore className="ljk-mb-m last:ljk-mb-0" {...props} ref={ref} />
))

export default FormControl
