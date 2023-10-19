import { InvalidDateFormatError } from './Errors/InvalidDateFormatError'

/**
 * Checks that the passed date is a valid date for a Japanes Era calendar.
 * This does NOT validate that the passed date has a valid era name.
 */
export class JapaneseEraDateValidator {
  #acceptableDateFormats = {
    yearMonth: /^[a-zA-Z]{1,30}\s(?!0{1,2})(\d{1,2})\/(0[1-9]|1[0-2])$/,
    year: /^[a-zA-Z]{1,30}\s(?!0{1,2})\d{1,2}$/
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
   * Acceptable formats:
   * "EraName" YY/MM
   * "EraName" YY .
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
