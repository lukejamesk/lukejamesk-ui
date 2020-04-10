[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![CircleCI](https://circleci.com/gh/lukejamesk/lukejamesk-ui.svg?style=svg)](https://circleci.com/gh/circleci/circleci-docs) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![Storybook](https://github.com/storybookjs/brand/blob/master/badge/badge-storybook.svg)](https://117-152932731-gh.circle-artifacts.com/0/build-storybook/index.html)

# lukejamesk-ui

My personal ui library, used for prototyping ideas quickly

- `yarn install @lukejamesk/core @lukejamesk/styles @lukejamesk/design-system @lukejamesk/icons @lukejamesk/test-utils` from the github registry

This project uses tailwind as a peerDependency

`@import "@lukejamesk/styles/scss/base.scss"`

I expose the tailwind config in @lukejamesk/styles

`@import { tailwindConfig } from "@lukejamesk/styles"`
