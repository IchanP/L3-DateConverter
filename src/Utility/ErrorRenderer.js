/**
 * Simple class for rendering errors.
 */
export class ErrorRenderer {
  /**
   * Create an instance of the class.
   *
   * @param {HTMLElement} elementToRenderTo - The element to render the error in.
   * @param {Error} error - The error.
   */
  constructor (elementToRenderTo, error) {
    this.#renderError(elementToRenderTo, error)
  }

  /**
   * Renders the error in the elemnt.
   *
   * @param {HTMLElement} elementToRenderTo - The element to render the error in.
   * @param {Error} error - The error.
   */
  #renderError (elementToRenderTo, error) {
    console.error(error)
    elementToRenderTo.textContent = error.message
  }
}
