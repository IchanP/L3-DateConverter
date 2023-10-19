import { InvalidDateFormatError } from './Errors/InvalidDateFormatError.js'

/**
 * Checks that the passed date is a valid date for calendars that write dates in a western fashion.
 */
export class BasicCalendarDateValidator {
  #acceptableDateFormats = {
    yearMonthDate: /^(?!0{1,4})(\d{1,4})\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/,
    dateMonthYear: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(?!0{1,4})(\d{1,4})$/,
    monthDateYear: /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(?!0{1,4})(\d{1,4})$/,
    monthYear: /^(0[1-9]|1[0-2])\/(?!0{1,4})(\d{1,4})$/,
    yearMonth: /^(?!0{1,4})(\d{1,4})\/(0[1-9]|1[0-2])$/
  }

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
