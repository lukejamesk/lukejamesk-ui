import { KeyValuePair } from 'ramda'

export type BreakpointName = string

export type BreakpointWidth = number

export type Breakpoint = Readonly<Record<BreakpointName, BreakpointWidth>>

export type Breakpoints = Readonly<Record<BreakpointName, BreakpointWidth>>

export type BreakpointPair = KeyValuePair<BreakpointName, BreakpointWidth>
