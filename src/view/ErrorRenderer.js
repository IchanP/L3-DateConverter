/**
 * Simple class for rendering errors.
 */
export class ErrorRenderer {
  #elementToRenderTo
  #error
  /**
   * Create an instance of the class.
   *
   * @param {HTMLElement} elementToRenderTo - The element to render the error in.
   * @param {Error} error - The error.
   */
  constructor (elementToRenderTo, error) {
    this.#elementToRenderTo = elementToRenderTo
    this.#error = error
  }

  /**
   * Renders the error in the elemnt.
   *
   * @param {HTMLElement} elementToRenderTo - The element to render the error in.
   * @param {Error} error - The error.
   */
  renderError (elementToRenderTo, error) {
    elementToRenderTo.textContent = error.message
  }
}
