import React from 'react'
import PropTypes from 'prop-types'
import { library } from '@lukejamesk/core'
import { trashAlt } from '@lukejamesk/icons'
import ButtonIcon from '../ButtonIcon'

library.add(trashAlt)

const DeleteButton = ({ children = 'Delete', ...props }) => {
  /* eslint-disable-next-line react/prop-types */
  const { variant, icon, ...allowedProps } = props
  return (
    <ButtonIcon variant="danger" icon="trash-alt" {...allowedProps}>
      {children}
    </ButtonIcon>
  )
}

DeleteButton.displayName = 'DeleteButton'

DeleteButton.propTypes = {
  children: PropTypes.string,
}

export default DeleteButton
