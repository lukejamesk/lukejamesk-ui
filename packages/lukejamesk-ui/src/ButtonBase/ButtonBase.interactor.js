import { createInteractor } from '@lukejamesk/test-utils'

const buttonElements = (wrapper) => ({
  button() {
    return wrapper.find('[type="button"]')
  },
})

const buttonActions = (elements) => ({
  click() {
    elements.button().simulate('click')
    return this
  },
})

const ButtonBaseInteractor = createInteractor(buttonElements, buttonActions, undefined)

export default ButtonBaseInteractor
