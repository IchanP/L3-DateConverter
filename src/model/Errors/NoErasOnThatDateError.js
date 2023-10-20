/**
 * A class used to represent an error when the date cannot be converted.
 */
export class NoErasOnThatDateError extends Error {
  /**
   * Create an instance of the class.
   *
   * @param {string} date - The invalid date in string format.
   */
  constructor (date) {
    const erorrMessage = `The date ${date} cannot be converted, due to no Japanese Eras during that date.`
    super(erorrMessage)
    this.name = 'NoErasOnThatDateError'
  }
}
