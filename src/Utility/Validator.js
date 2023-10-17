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
  static validateAllElementsOfType (arrayToValidate, type) {
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
  static validateIsThisAnArray (arrayToValidate) {
    if (!Array.isArray(arrayToValidate)) {
      throw new TypeError('Expected argument to be of type Array.' + arrayToValidate + ' is not an array.')
    }
  }

  /**
   * Validates that the passed string is not empty.
   *
   * @param {string} stringToCheck - The string to check.
   * @returns {boolean} - Returns true if the string is empty, false otherwise.
   */
  static isStringEmpty (stringToCheck) {
    return stringToCheck === ''
  }

  /**
   * Validates that the passed object is of the passed type.
   *
   * @param {object} argumentToValidate - The object to validate.
   * @param {object} type - The type the object should be.
   */
  validateType (argumentToValidate, type) {
    if (!(argumentToValidate instanceof type)) {
      throw new TypeError('Expected argument to be of type ' + type.name + '.')
    }
  }
}
