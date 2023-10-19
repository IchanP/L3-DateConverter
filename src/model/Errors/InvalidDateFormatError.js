/**
 * A class used to represent an error when the date is not accepted for the calendar.
 */
export class InvalidDateFormatError extends Error {
  /**
   * Create an instance of the class.
   *
   * @param {string} date - The invalid date in string format.
   */
  constructor (date) {
    const erorrMessage = `The date ${date} is not an accepted date format.`
    super(erorrMessage)
    this.name = 'InvalidDateFormatError'
  }
}
