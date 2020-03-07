/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { curry } from 'ramda'
import createInteractor from './createInteractor'

const testButtonElements = (wrapper, { buttonElement = 'button' }) => ({
  button() {
    return wrapper.find(buttonElement)
  },
})

const testButtonActions = (elements) => ({
  click() {
    elements.button().simulate('click')
    return this
  },
})

const testButtonUnmount = curry((handler, interactor) => {
  handler()
  interactor.wrapper.unmount()
})

const testButtonsElements = (wrapper) => ({
  buttonFirst() {
    return createInteractor(
      testButtonElements,
      testButtonActions,
      undefined,
      wrapper.find('button:first-child'),
    )
  },
  buttonSecond() {
    return createInteractor(
      testButtonElements,
      testButtonActions,
      undefined,
      wrapper.find('button:last-child'),
    )
  },
})

const testButtonsActions = (elements) => ({
  clickFirstButton() {
    elements.buttonFirst().actions.click()
    return this
  },
  clickSecondButton() {
    elements.buttonSecond().actions.click()
    return this
  },
})

describe('createInteractor', () => {
  it('should be able to create an interactor object', () => {
    const callbackSpy = jest.fn()
    const interactor = createInteractor(
      testButtonElements,
      testButtonActions,
      undefined,
      <div>
        <button type="button" onClick={callbackSpy}>
          test
        </button>
      </div>,
    )

    interactor.actions.click()
    expect(callbackSpy.mock.calls.length).toEqual(1)
  })

  it('should be able to create an interactor object with configuration', () => {
    const callbackSpy = jest.fn()
    const interactor = createInteractor(testButtonElements, testButtonActions, undefined, {
      Component: (
        <div>
          <a href="#" onClick={callbackSpy}>
            test
          </a>
        </div>
      ),
      buttonElement: 'a',
    })

    interactor.actions.click()
    expect(callbackSpy.mock.calls.length).toEqual(1)
  })

  it('should be able to pass a custom unmount function', () => {
    const unmountSpy = jest.fn()
    const interactor = createInteractor(
      testButtonElements,
      testButtonActions,
      testButtonUnmount(unmountSpy),
      <div>
        <button type="button">test</button>
      </div>,
    )

    interactor.unmount()
    expect(unmountSpy.mock.calls.length).toEqual(1)
  })

  it('should be able to have nested interactors', () => {
    const callbackFirstSpy = jest.fn()
    const callbackSecondSpy = jest.fn()
    const interactor = createInteractor(
      testButtonsElements,
      testButtonsActions,
      undefined,
      <div>
        <button type="button" onClick={callbackFirstSpy}>
          First
        </button>
        <button type="button" onClick={callbackSecondSpy}>
          Second
        </button>
      </div>,
    )

    interactor.actions.clickFirstButton()
    interactor.actions.clickSecondButton()

    expect(callbackFirstSpy.mock.calls.length).toEqual(1)
    expect(callbackSecondSpy.mock.calls.length).toEqual(1)
  })
})
