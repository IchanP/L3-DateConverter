/**
 *
 */
export class Validator {
  /**
   * Validates that all elements in the array are of the type passed as argument.
   *
   * @param {Array<unknown>} arrayToValidate - The array to verify.
   * @param {object} type - The type the elements in the array should be.
   */
  validateAllElementsOfType (arrayToValidate, type) {
    for (const obj of arrayToValidate) {
      if (!(obj instanceof type)) {
        throw new TypeError('Expected all elements in the array to be of type ' + type.name + '.')
      }
    }
  }

  /**
   * Validates that the argument is an array.
   *
   * @param {unknown} arrayToValidate - Argument to validate is an array.
   */
  validateIsThisAnArray (arrayToValidate) {
    if (!Array.isArray(arrayToValidate)) {
      throw new TypeError('Expected argument to be of type Array.' + arrayToValidate + ' is not an array.')
    }
  }
}
