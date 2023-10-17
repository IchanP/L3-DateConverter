/**
 *
 */
class LinkElementBuilder {
  /**
   *
   * @param aElementToBuild
   */
  constructor (aElementToBuild) {
    this.aElementToBuild = aElementToBuild
  }

  /**
   *
   */
  createElement () {
    const aElement = document.createElement('a')
    aElement.textContent = this.aElementToBuild.aLinkTextContent
    aElement.onclick = this.aElementToBuild.onClickCallback
    aElement.href = ''
    return aElement
  }
}
