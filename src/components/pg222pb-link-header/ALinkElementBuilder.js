import { AElementBuilder } from './AElementBuilder'

/**
 *
 */
export class LinkElementBuilder {
  #aElementToBuild
  /**
   * Initializes the fields of the class.
   *
   * @param {AElementBuilder} aElementToBuild - The element to build.
   */
  constructor (aElementToBuild) {
    this.#aElementToBuild = aElementToBuild
  }

  /**
   * Creates an element from the aElementToBuild field.
   *
   * @param elementToBuildFrom
   * @returns {HTMLElement} - The element constructed as an "a" element.
   */
  createElement () {
    const aElement = document.createElement('a')
    aElement.textContent = this.#aElementToBuild.aLinkTextContent
    aElement.onclick = this.#aElementToBuild.onClickCallback
    aElement.href = ''
    return aElement
  }
}
