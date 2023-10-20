import { AcceptableJapaneseEraDateFormats } from '../AcceptableDateFormats'

/**
 * Converts Japanese Era dates to a format split between name, year, month and day.
 */
export class JapaneseEraDateTransformer {
  #dateObject
  #dateFormat
  #acceptableFormats
  /**
   * Initializes the fields
   *
   * @param {string} dateToConvert - The date from which the DateObject is constructed from.
   */
  constructor (dateToConvert) {
    this.#acceptableFormats = AcceptableJapaneseEraDateFormats
    // this.#setDateFormat(dateToConvert)
    // this.#dateObject = this.#formatDate(dateToConvert)
  }

  /**
   * Returns the date format which the date object is constructed from.
   *
   * @returns {string} - Returns a string from which the date object is constructed from. Possible values are:
   * yearMonth, year .
   */
  get dateFormat () {
    return this.#dateFormat
  }

  /**
   * Returns the formatted date.
   * 
   * @returns {}
   */
  getDateObject () {
    return this.#dateObject
  }
}
