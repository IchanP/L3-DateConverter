import { InvalidDateFormatError } from './Errors/InvalidDateFormatError.js'
import { AcceptableBasicDateFormats } from './AcceptableBasicDateFormats.js'

/**
 * Checks that the passed date is a valid date for calendars that write dates in a western fashion.
 */
export class BasicCalendarDateValidator {
  #acceptableDateFormats = AcceptableBasicDateFormats

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
   * Getter for the acceptable date formats.
   *
   * @returns {object} - Returns the acceptable date formats in a frozen state.
   */
  get acceptableDateFormats () {
    return Object.freeze(this.#acceptableDateFormats)
  }

  /**
   * Validates the date by parsing it against the acceptable date formats.
   * Valid dates are
   * YYYY/MM/DD
   * DD/MM/YYYY
   * MM/DD/YYYY
   * MM/YYYY
   * YYYY/MM .
   *
   * @throws {InvalidDateFormatError} - Throws an InvalidDateFormatError if the date is not valid.
   */
  validateDate () {
    for (const acceptableDate of Object.values(this.#acceptableDateFormats)) {
      if (acceptableDate.test(this.#dateFormat)) {
        return
      }
    }
    throw new InvalidDateFormatError(this.#dateFormat)
  }
}
