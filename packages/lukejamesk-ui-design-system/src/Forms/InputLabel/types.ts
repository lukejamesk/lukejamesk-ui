export type LabelRef = HTMLLabelElement

export type LabelVariant = 'label' | 'text'

export type LabelProps = React.PropsWithChildren<{
  for: string
  required?: boolean
  variant?: LabelVariant
}>
