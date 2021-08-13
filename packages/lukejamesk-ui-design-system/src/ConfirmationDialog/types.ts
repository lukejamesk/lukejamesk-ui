import { ButtonProps } from '../Button/types'
import { ModalProps, ModalSize } from '../Modal/types'

export type ConfirmationDialogProps = {
  size?: ModalSize
} & Omit<ModalProps, 'disableCurtain'>

export type ConfirmationDialogActionsProps = {
  children: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[]
}
