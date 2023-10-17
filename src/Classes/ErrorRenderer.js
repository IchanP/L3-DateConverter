/**
 * Simple class for rendering errors.
 */
export class ErrorRenderer {
  /**
   *  Create an instance of the class.
   *
   * @param {HTMLElement} elementToRenderTo - The element to render the error in.
   * @param {string} errorMessage - The error message.
   */
  constructor (elementToRenderTo, errorMessage) {
    this.#renderError(elementToRenderTo, errorMessage)
  }

  /**
   * Renders the error in the elemnt.
   *
   * @param {HTMLElement} elementToRenderTo - The element to render the error in.
   * @param {string} errorMessage - The error message.
   */
  #renderError (elementToRenderTo, errorMessage) {
    elementToRenderTo.textContent = errorMessage
  }
}
