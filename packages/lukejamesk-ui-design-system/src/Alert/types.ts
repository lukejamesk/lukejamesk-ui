export type AlertType = 'info' | 'success' | 'error'

export type AlertProperties = React.PropsWithChildren<{
  variant?: AlertType
}>
