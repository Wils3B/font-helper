export default class Icon {
  /**
   *
   * @param {String} prefix The fa prefix of the icon, for the free version of fa, their value might be on the list [fas, far, fab]
   * @param {String} name The fa icon name
   */
  constructor (prefix, name) {
    this.prefix = prefix
    this.name = name
    this.visible = true
    this.selected = false
  }
}
