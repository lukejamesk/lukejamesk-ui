import { createContext } from 'react'

const ExpansionPanelContext = createContext<{
  expanded: boolean
  onChange: () => void
  id?: string
}>({
  expanded: false,
  onChange: () => {},
  id: undefined,
})

export default ExpansionPanelContext
