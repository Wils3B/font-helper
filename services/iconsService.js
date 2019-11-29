import { ICONS } from '../model/icons'

export class IconService {
  constructor () {
    this.icons = ICONS
  }

  doSearch (value) {
    this.icons.forEach((icon) => {
      if (icon.prefix.includes(value) || icon.name.includes(value)) {
        icon.visible = true
      } else {
        icon.visible = false
      }
    })
  }
}

const iconService = new IconService()
export default iconService
