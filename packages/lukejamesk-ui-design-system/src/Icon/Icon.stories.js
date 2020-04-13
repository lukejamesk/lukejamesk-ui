import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { forEach, compose, sort, comparator, lt, keys, map } from 'ramda'
import * as AllIcons from '@lukejamesk/icons'

import { library } from '@lukejamesk/core'
import Icon, { iconSizes, iconVariants } from './Icon'

const getKeys = compose(sort(comparator(lt)), keys)

forEach((icon) => {
  library.add(AllIcons[icon])
}, getKeys(AllIcons))

export default {
  title: 'Design System/Icon',
  component: Icon,
}

export const Default = () => (
  <Icon
    name={text('icon', 'arrow-down')}
    variant={select('Variant', iconVariants, iconVariants[0])}
    size={select('Size', iconSizes, iconSizes[0])}
  />
)

export const All = () => (
  <div className="ljk-grid ljk-grid-cols-12 ljk-gap-1">
    {map(
      (icon) => (
        <Icon
          name={AllIcons[icon].iconName}
          variant={select('Variant', iconVariants, iconVariants[0])}
          size={select('Size', iconSizes, iconSizes[0])}
        />
      ),
      getKeys(AllIcons),
    )}
  </div>
)
