import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const ModalHandlersContext = createContext()

export const ModalHandlersProvider = ({ onClose, children }) => {
  return <ModalHandlersContext.Provider value={{ onClose }}>{children}</ModalHandlersContext.Provider>
}

ModalHandlersProvider.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
}

export const useModalHandlers = () => useContext(ModalHandlersContext)
