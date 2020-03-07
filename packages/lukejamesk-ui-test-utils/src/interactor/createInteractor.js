import { mount } from 'enzyme'
import { curry, path, omit } from 'ramda'

const createInteractorObject = (els, actions, wrapper, unmount, extraParams) => ({
  wrapper,
  elements: els,
  actions: actions(els, extraParams || {}),
  unmount: unmount
    ? () => unmount(createInteractorObject(els, actions, wrapper, undefined, extraParams))
    : null,
})

const defaultUnmount = (interactor) => interactor.wrapper.unmount()

const createInteractor = curry((elements, actions, unmountAction, config) => {
  const { Component, unmount, ...extraParams } = path(['Component'], config)
    ? {
        Component: config.Component,
        unmount: unmountAction || defaultUnmount,
        ...omit(['Component'], config),
      }
    : {
        Component: config,
        unmount: unmountAction || defaultUnmount,
      }

  // Check if this Component is a React
  // component or mounted to Enzyme already
  const wrapper = Component.$$typeof ? mount(Component) : Component

  const els = elements(wrapper, extraParams || {})
  return createInteractorObject(els, actions, wrapper, unmount, extraParams)
})

export default createInteractor
