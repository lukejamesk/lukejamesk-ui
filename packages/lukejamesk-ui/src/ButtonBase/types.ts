import React from 'react'

export type ButtonBaseRef = HTMLButtonElement

export type ButtonBasePropsCustom = React.PropsWithChildren<{
  className?: string
  element?: string | React.FunctionComponent<React.HTMLProps<HTMLButtonElement>>
}>
export type ButtonBaseProps = ButtonBasePropsCustom &
  Omit<React.HTMLAttributes<ButtonBaseRef>, keyof ButtonBasePropsCustom> &
  Omit<React.HTMLProps<ButtonBaseRef>, keyof ButtonBasePropsCustom>
