import React, { createRef } from 'react'
import { keys } from 'ramda'
import { mount } from 'enzyme'
import useStyles from './useStyles'

const styles = {
  test: {
    color: 'red'
  }
}

describe('useTheme', () => {
  it('should match the testTheme', () => {
    const ref = createRef()
    const text = () => ref.current.textContent
    const Test = () => {
      const classes = useStyles(styles)
      return <span ref={ref}>{classes.test}</span>
    }

    mount(
      <Test />
    )

    expect(text()).toMatch(keys(styles)[0])
  })
})
