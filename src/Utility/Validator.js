/**
 *
 */
export class Validator {
  /**
   * Validates that all elements in the array are of the type passed as argument.
   *
   * @param {Array<unknown>} arrayToValidate - The array to verify.
   * @param {object} type - The type the elements in the array should be.
   * @returns {boolean} - True if all elements are of the type passed as argument, false otherwise.
   */
  isAllElementsOfType (arrayToValidate, type) {
    for (const obj of arrayToValidate) {
      if (!(obj instanceof type)) {
        return false
      }
    }
    return true
  }
}
