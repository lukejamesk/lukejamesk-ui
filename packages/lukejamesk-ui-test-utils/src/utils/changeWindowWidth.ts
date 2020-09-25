import setWindowWidth from './setWindowWidth'

const changeWindowWidth = (width: number): void => {
  setWindowWidth(width)

  window.dispatchEvent(new Event('resize'))
}

export default changeWindowWidth
