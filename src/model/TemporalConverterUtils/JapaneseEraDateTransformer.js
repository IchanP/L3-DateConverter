import { AcceptableJapaneseEraDateFormats } from '../Data/AcceptableDateFormats'
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

  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * Formats the date to a data structure containg the name, year, month and day.
   *
   * @param {string} dateToFormat - The date to convert to a NamedDateObject.
   * @returns {NamedDateObject} - Returns a NamedDateObject which may have a null month and day field.
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

  /**
   * Converts a date in the format "Name YY/MM" to a NamedDateObject holding a name, year and month field.
   *
   * @param {string} nameYearMonth - The string to convert to a NamedDateObject.
   * @returns {NamedDateObject} - Returns a named date object holding a name, year and month field.
   */
  #convertYearMonth (nameYearMonth) {
    const [name, yearMonth] = nameYearMonth.split(' ')
    const [extractedYear, extractedMonth] = yearMonth.split('/')
    return this.#buildNamedDateObject(name, extractedYear, extractedMonth)
  }

  /**
   * Converts a date in the format "Name YY" to a NamedDateObject holding a name and year field.
   *
   * @param {string} nameYear - The string to convert to a NamedDateObject.
   * @returns {NamedDateObject} - Returns a named date object holding a name and year field.
   */
  #convertYear (nameYear) {
    const [name, extractedYear] = nameYear.split(' ')
    return this.#buildNamedDateObject(name, extractedYear)
  }

  /**
   * Builds a NamedDateObject with the passed arguments and returns it.
   *
   * @param {string} buildName - The name of the era.
   * @param {string} buildYear - The year of the era.
   * @param {string} buildMonth - The month of the year of the era.
   * @param {string} buildDay - The date of the month of the year of the era.
   * @returns {NamedDateObject} - Returns a NamedDateObject with the arguments passed as fields.
   */
  #buildNamedDateObject (buildName, buildYear, buildMonth, buildDay) {
    return new NamedDateObject(buildName, buildYear, buildMonth, buildDay)
  }
}
