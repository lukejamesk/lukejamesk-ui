import React, { createContext, useContext } from 'react'

export type ModalContext = {
  onClose: () => void
}

const ModalHandlersContext = createContext<ModalContext>({
  onClose: () => {},
})

export type ModalHandlersProviderProps = React.PropsWithChildren<{
  onClose: () => void
}>

export const ModalHandlersProvider: React.FC<ModalHandlersProviderProps> = ({ onClose, children }) => {
  return <ModalHandlersContext.Provider value={{ onClose }}>{children}</ModalHandlersContext.Provider>
}

export const useModalHandlers: () => ModalContext = () => useContext<ModalContext>(ModalHandlersContext)
