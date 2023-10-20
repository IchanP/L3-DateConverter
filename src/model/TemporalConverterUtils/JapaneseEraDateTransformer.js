import { AcceptableJapaneseEraDateFormats } from '../AcceptableDateFormats'
import { NamedDateObject } from '../DataStructure/NamedDateObject'
import { DateTransformer } from './DateTransformer'

/**
 * Converts Japanese Era dates to a format split between name, year, month and day.
 */
export class JapaneseEraDateTransformer extends DateTransformer {
  #dateHolder
  /**
   * Initializes the fields.
   * Creates a field containing a NamedDateObject created from the information passed by the dateToConvert argument.
   *
   * @param {string} dateToConvert - The date from which the DateObject is constructed from.
   */
  constructor (dateToConvert) {
    super(AcceptableJapaneseEraDateFormats, dateToConvert)
    this.#dateHolder = this.#formatDate(dateToConvert)
  }

  /**
   * Returns the formatted date.
   *
   * @returns {NamedDateObject} - Returns a NamedDateObject which may have a null month and day field.
   */
  getDateObject () {
    return this.#dateHolder
  }

  /**
   * Formats the date to a data structure containg the name, year, month and day.
   *
   * @param {string} dateToFormat
   */
   #formatDate (dateToFormat) {
    this.getDateFormat(dateToFormat)
    if (this.dateFormat === 'yearMonth') {
      return this.#convertYearMonth(dateToFormat)
    }
    if (this.dateFormat === 'year') {
      return this.#convertYear(dateToFormat)
    }
  } 
}
