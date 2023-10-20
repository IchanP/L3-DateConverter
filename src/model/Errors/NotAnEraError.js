/**
 * A class used to represent an error when the passed era name does not exist.
 */
export class NotAnEraError extends Error {
  /**
   * Create an instance of the class.
   *
   * @param {string} eraName - The invalid date in string format.
   */
  constructor (eraName) {
    const erorrMessage = `The Japanese Era name: ${eraName} does not exist.`
    super(erorrMessage)
    this.name = 'NotAnEraError'
  }
}
