import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Breakpoints from './Breakpoints'
import useBreakpoints from './useBreakpoints'
import Typography from '../Typography'
import ShowAt from './ShowAt'
import HideAt from './HideAt'

const breakpoints = {
  s: 0,
  m: 768,
  l: 1366,
}

const Component = () => {
  const { breakpoints, currentBreakpoint } = useBreakpoints()

  return (
    <>
      <Typography variant="heading1">Resize the browser</Typography>
      <Typography variant="paragraph">
        <Typography variant="bold">Current Breakpoint:&nbsp;</Typography>
        {JSON.stringify(currentBreakpoint)}
      </Typography>
      <Typography variant="paragraph">
        <Typography variant="bold">All Breakpoints:&nbsp;</Typography>
        {JSON.stringify(breakpoints)}
      </Typography>
    </>
  )
}

export default {
  title: 'Core/Breakpoints',
  decorators: [
    (storyFn: () => React.ReactNode): React.ReactElement => (
      <Breakpoints breakpoints={breakpoints}>{storyFn()}</Breakpoints>
    ),
  ],
  component: Breakpoints,
  subcomponents: { ShowAt, HideAt },
} as Meta

export const Default: Story = () => <Component />

export const ShowAtStory: Story = () => (
  <>
    <Typography variant="paragraph">Change screensize to m or larger</Typography>
    <ShowAt bp="m">
      <Typography variant="bold">Displaying only at m</Typography>
    </ShowAt>
  </>
)

ShowAtStory.storyName = 'Show At'

export const HideAtStory: Story = () => (
  <>
    <Typography variant="paragraph">Change screensize to smaller than m</Typography>
    <HideAt bp="m">
      <Typography variant="bold">Hiding at m</Typography>
    </HideAt>
  </>
)
HideAtStory.storyName = 'Hide at'
