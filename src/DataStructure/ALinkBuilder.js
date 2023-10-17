/**
 * A data structure for building an a link.
 */
export class ALinkBuilder {
  #aLinkTextContent
  #onClickCallback

  /**
   * Initializes the fields of the class.
   *
   * @param {string} textContent - The textcontent for the a link.
   * @param {Function} onClickCallback - The function for the a link to execute when clicked.
   */
  constructor (textContent, onClickCallback) {
    this.#aLinkTextContent = textContent
    this.#onClickCallback = onClickCallback
  }

  /**
   * Getter for the text content of the object.
   *
   * @returns {string} - Returns the text content field.
   */
  get aLinkTextContent () {
    return this.#aLinkTextContent
  }

  /**
   * Getter for the on click callback of the object.
   *
   * @returns {Function} - Returns the function to execute when the a link is clicked.
   */
  get onClickCallback () {
    return this.#onClickCallback
  }
}
