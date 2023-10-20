/**
 *
 */
export class AbstractClassError extends Error {
  /**
   * Create an instance of the class.
   *
   * @param {string} className - The name of the class.
   */
  constructor (className) {
    const errorMessage = `The class ${className} is abstract and cannot be instantiated.`
    super(errorMessage)
    this.name = 'AbstractClassError'
  }
}
