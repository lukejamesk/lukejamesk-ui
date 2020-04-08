import setWindowWidth from './setWindowWidth'

const changeWindowWidth = (width) => {
  setWindowWidth(width)

  window.dispatchEvent(new Event('resize'))
}

export default changeWindowWidth
