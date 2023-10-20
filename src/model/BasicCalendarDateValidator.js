import { InvalidDateFormatError } from './Errors/InvalidDateFormatError.js'
import { AcceptableBasicDateFormats } from './Data/AcceptableDateFormats.js'

/**
 * Checks that the passed date is a valid date for calendars that write dates in a western fashion.
 */
export class BasicCalendarDateValidator {
  #acceptableDateFormats

  #dateFormat
  /**
   * Initializes the fields.
   *
   * @param {string} dateFormat - The date that needs validation.
   */
  constructor (dateFormat) {
    this.#dateFormat = dateFormat
    this.#acceptableDateFormats = AcceptableBasicDateFormats
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
