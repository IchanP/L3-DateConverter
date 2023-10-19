import { DateObject } from '../DataStructure/DateObject'
import { AcceptableBasicDateFormats } from '../AcceptableBasicDateFormats'

/**
 * Converts dates in various formats to a data structure split between date, month and year.
 */
export class BasicDateTransformer {
  #acceptableFormats
  /**
   * Initializes the acceptableFormats field.
   */
  constructor () {
    this.#acceptableFormats = AcceptableBasicDateFormats
  }

  /**
   * Returns the formatted date.
   *
   * @param {string} dateToConvert - The date to convert.
   * @returns {DateObject} - Returns a DateObject which may have a null day field.
   */
  getFormattedDate (dateToConvert) {
    return this.#formatDate(dateToConvert)
  }

  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * Formats the date to a data structure containing the date, month and year.
   *
   * @param {string} dateToFormat - The date to format.
   * @returns {DateObject} - Returns a DateObject which may have a null day field.
   */
  #formatDate (dateToFormat) {
    const format = this.getDateFormat(dateToFormat)
    if (format === 'monthYear') {
      return this.#convertMonthYear(dateToFormat)
    }
    if (format === 'yearMonth') {
      return this.#yearMonth(dateToFormat)
    }
  }

  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * Matches the date to the acceptable formats.
   *
   * @param {string} dateToMatch - The date to match.
   * @returns {string} - Returns the format that the date matches.
   */
  getDateFormat (dateToMatch) {
    for (const [key, value] of Object.entries(this.#acceptableFormats)) {
      if (value.test(dateToMatch)) {
        return key
      }
    }
  }

  /**
   * Converts a date in the format MM/YYYY to a datastructure holding a month and year field.
   *
   * @param {string} monthYearDate - The string to convert.
   * @returns {DateObject} - Returns a date object containing the month and year.
   */
  #convertMonthYear (monthYearDate) {
    const monthYearArray = monthYearDate.split('/')
    const year = monthYearArray[1]
    const month = monthYearArray[0]
    return this.#buildDateStructure(null, month, year)
  }

  /**
   * Converts a date in the format YYYY/MM to a datastructure holding a month and year field.
   *
   * @param {string} yearMonthDate - The string to convert.
   * @returns {DateObject} - Returns a date object containing the month and year.
   */
  #yearMonth (yearMonthDate) {
    const yearMonthArray = yearMonthDate.split('/')
    const year = yearMonthArray[0]
    const month = yearMonthArray[1]
    return this.#buildDateStructure(null, month, year)
  }

  /**
   * Builds a data structure containing the date, month and year.
   *
   * @param {string} date - The date of the date to convert, if null builds an object containing month and year.
   * @param {string} month - The month of the date to convert.
   * @param {string} year - The year of the date to convert.'
   * @returns {DateObject} - Returns a date object which may have a null day field.
   */
  #buildDateStructure (date, month, year) {
    if (date !== null) {
      return new DateObject(year, month, date)
    } else {
      return new DateObject(year, month, null)
    }
  }
}
