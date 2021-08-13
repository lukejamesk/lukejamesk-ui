type ContainerInfo = {
  container: HTMLElement
  modals: Array<HTMLElement>
  restore?: () => void
}

type Modal = any

const findIndexOf = (
  containerInfo: Array<ContainerInfo>,
  callback: (containerInfo: ContainerInfo) => boolean,
) => {
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

const handleContainer = (containerInfo: ContainerInfo) => {
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
  private containers: Array<ContainerInfo>
  private modals: Array<Modal>

  constructor() {
    this.modals = []
    this.containers = []
  }

  add(modal: Modal, container: HTMLElement): number {
    let modalIndex = this.modals.indexOf(modal)

    if (modalIndex !== -1) {
      return modalIndex
    }

    modalIndex = this.modals.length
    this.modals.push(modal)

    this.containers.push({
      container,
      modals: [modal],
    })

    return modalIndex
  }

  mount(modal: Modal): void {
    const containerIndex = findIndexOf(
      this.containers,
      (item: ContainerInfo) => item.modals.indexOf(modal) !== -1,
    )

    const containerInfo = this.containers[containerIndex]

    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo)
    }
  }

  remove(modal: Modal): number {
    const modalIndex = this.modals.indexOf(modal)

    if (modalIndex === -1) {
      return modalIndex
    }

    const containerIndex = findIndexOf(
      this.containers,
      (item: ContainerInfo) => item.modals.indexOf(modal) !== -1,
    )
    const containerInfo = this.containers[containerIndex]

    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1)
    this.modals.splice(modalIndex, 1)
    if (containerInfo.modals.length === 0) {
      if (containerInfo.restore) {
        containerInfo.restore()
      }

      this.containers.splice(containerIndex, 1)
    }

    return modalIndex
  }
}
