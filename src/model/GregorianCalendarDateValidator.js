import { InvalidDateFormatError } from './Errors/InvalidDateFormatError.js'

/**
 * Checks that the passed is a valid date for the Gregorian calendar.
 */
export class GregorianCalendarDateValidator {
  #acceptableDateFormats = [
    /^(?!0{1,4})(\d{1,4})\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/
  ]

  #dateFormat
  /**
   * Initializes the dateformat field.
   *
   * @param {string} dateFormat - The date that needs validation.
   */
  constructor (dateFormat) {
    this.#dateFormat = dateFormat
  }

  /**
   * Validates the date.
   *
   * @throws {InvalidDateFormatError} - Throws an InvalidDateFormatError if the date is not valid.
   */
  validateDate () {
    for (const acceptableDate of this.#acceptableDateFormats) {
      console.log(acceptableDate)
      if (acceptableDate.test(this.#dateFormat)) {
        return
      }
    }
    throw new InvalidDateFormatError(this.#dateFormat)
  }
}
