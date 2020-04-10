const findIndexOf = (containerInfo, callback) => {
  let idx = -1

  containerInfo.some((item, index) => {
    if (callback(item)) {
      idx = index
      return true
    }
    return false
  })
  return idx
}

const handleContainer = (containerInfo) => {
  const { container } = containerInfo
  const restoreStyle = [
    {
      value: container.style.overflow,
      key: 'overflow',
      el: container,
    },
  ]

  container.style.overflow = 'hidden'

  return () => {
    restoreStyle.forEach(({ value, el, key }) => {
      if (value) {
        el.style.setProperty(key, value)
      } else {
        el.style.removeProperty(key)
      }
    })
  }
}

export default class ModalManager {
  constructor() {
    this.modals = []
    this.containers = []
  }

  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal)

    if (modalIndex !== -1) {
      return modalIndex
    }

    modalIndex = this.modals.length
    this.modals.push(modal)

    this.containers.push({
      container,
      modals: [modal],
      restore: null,
    })

    return modalIndex
  }

  mount(modal) {
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1)
    const containerInfo = this.containers[containerIndex]

    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo)
    }
  }

  remove(modal) {
    const modalIndex = this.modals.indexOf(modal)

    if (modalIndex === -1) {
      return modalIndex
    }

    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1)
    const containerInfo = this.containers[containerIndex]

    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1)
    this.modals.splice(modalIndex, 1)
    if (containerInfo.modals.length === 0) {
      containerInfo.restore()

      this.containers.splice(containerIndex, 1)
    }

    return modalIndex
  }
}
