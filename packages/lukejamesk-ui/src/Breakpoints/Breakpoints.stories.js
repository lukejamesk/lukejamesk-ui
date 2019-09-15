import React from 'react'
import { storiesOf } from '@storybook/react'
import { defaultTheme } from '@lukejamesk-ui/styles'
import Breakpoints from './Breakpoints'
import useBreakpoints from './useBreakpoints'
import Typography from '../Typography'
import ShowAt from './ShowAt'
import HideAt from './HideAt'

const Component = () => {
  const { breakpoints, currentBreakpoint } = useBreakpoints()

  return (
    <>
      <Typography variant="heading1">
        Resize the browser
      </Typography>
      <Typography variant="paragraph">
        <Typography variant="bold">
        Current Breakpoint:&nbsp;
        </Typography>
        {JSON.stringify(currentBreakpoint)}
      </Typography>
      <Typography variant="paragraph">
        <Typography variant="bold">
          All Breakpoints:&nbsp;
        </Typography>
        {JSON.stringify(breakpoints)}
      </Typography>
    </>
  )
}
storiesOf('UI|Breakpoints', module)
  .addDecorator(storyFn => (
    <Breakpoints breakpoints={defaultTheme.breakpoints}>
      {storyFn()}
    </Breakpoints>
  ))
  .add('Default', () => (
    <Component />
  ))
  .add('ShowAt', () => (
    <>
      <Typography variant="paragraph">
        Change screensize to m or larger
      </Typography>
      <ShowAt bp="m">
        <Typography variant="bold">
          Displaying only at m
        </Typography>
      </ShowAt>
    </>
  ))
  .add('HideAt', () => (
    <>
      <Typography variant="paragraph">
        Change screensize to smaller than m
      </Typography>
      <HideAt bp="m">
        <Typography variant="bold">
          Hiding at m
        </Typography>
      </HideAt>
    </>
  ))
