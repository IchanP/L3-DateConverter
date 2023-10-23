import { AbstractClassError } from '../Errors/AbstractClassError'

/**
 * An abstract class that holds common fields and methods for date transformers.
 */
export class DateTransformer {
  #acceptableFormats
  #dateFormat
  /**
   * Initializes the private fields.
   *
   * @throws {AbstractClassError} - Throws an error if the class is instantiated directly.
   * @param {Array<RegExp>} acceptableDateFormats - Ana rray of regex expressiosn detailing the acceptable date formats.
   * @param {string} dateToConvert - The date to convert the format of.
   */
  constructor (acceptableDateFormats, dateToConvert) {
    if (new.target === DateTransformer) {
      throw new AbstractClassError('DateTransformer')
    }
    this.#acceptableFormats = acceptableDateFormats
    this.#setDateFormat(dateToConvert)
  }

  /**
   * Returns the date format which the date object is constructed from.
   *
   * @returns {string} - Returns a string from which the the date object is constructed from. Possible values are:
   * monthYear, yearMonth, monthDateYear, dateMonthYear, yearMonthDate.
   */
  get dateFormat () {
    return this.#dateFormat
  }

  /**
   * Matches the date to the acceptable formats.
   *
   * @param {string} dateToMatch - The date to match.
   */
  #setDateFormat (dateToMatch) {
    for (const [key, value] of Object.entries(this.#acceptableFormats)) {
      if (value.test(dateToMatch)) {
        this.#dateFormat = key
      }
    }
  }
}
