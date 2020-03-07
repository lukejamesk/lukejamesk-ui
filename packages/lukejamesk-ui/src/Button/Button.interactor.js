import { createInteractor } from '@lukejamesk/test-utils'

const buttonElements = (wrapper) => ({
  button() {
    return wrapper.find('button')
  },
})

const buttonActions = (elements) => ({
  click() {
    elements.button().simulate('click')
    return this
  },
  getVariant() {
    return elements.wrapper().props().variant
  },
})

const ButtonInteractor = createInteractor(buttonElements, buttonActions, undefined)

export default ButtonInteractor
