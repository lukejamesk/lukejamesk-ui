export type ExpanderProps = {
  id: string
  expanded?: boolean
  uncontrolled?: boolean
  onChange?: (expanded: boolean) => void
  children: React.ReactNode
}
