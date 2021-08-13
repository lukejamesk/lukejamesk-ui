export type ModalSize = 's' | 'm' | 'l'

export type ModalProps = React.PropsWithChildren<{
  onClose?: () => void
  size?: ModalSize
  disableCurtain?: boolean
  open: boolean
}>
