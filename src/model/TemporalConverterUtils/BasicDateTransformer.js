import { DateObject } from '../DataStructure/DateObject'
import { AcceptableBasicDateFormats } from '../Data/AcceptableDateFormatRegexes'
import { DateTransformer } from './DateTransformer'

/**
 * Converts dates in various formats to a data structure split between date, month and year.
 */
export class BasicDateTransformer extends DateTransformer {
  #dateHolder
  /**
   * Initializes the fields.
   * Creates a field containing a DateObject created from the information passed by the dateToConvert argument.
   *
   * @param {string} dateToConvert - The date from which the DateObject is constructed from.
   */
  constructor (dateToConvert) {
    super(AcceptableBasicDateFormats, dateToConvert)
    this.#dateHolder = this.#formatDate(dateToConvert)
  }

  /**
   * Returns the formatted date.
   *
   * @returns {DateObject} - Returns a DateObject which may have a null day field.
   */
  getDateObject () {
    return this.#dateHolder
  }

  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * Formats the date to a data structure containing the date, month and year.
   *
   * @param {string} dateToFormat - The string to convert.
   * @returns {DateObject} - Returns a DateObject which may have a null day field.
   */
  #formatDate (dateToFormat) {
    if (this.dateFormat === 'monthYear') {
      return this.#convertMonthYear(dateToFormat)
    }
    if (this.dateFormat === 'yearMonth') {
      return this.#convertYearMonth(dateToFormat)
    }
    if (this.dateFormat === 'monthDateYear') {
      return this.#convertMonthDateYear(dateToFormat)
    }
    if (this.dateFormat === 'dateMonthYear') {
      return this.#convertDateMonthYear(dateToFormat)
    }
    if (this.dateFormat === 'yearMonthDate') {
      return this.#convertYearMonthDate(dateToFormat)
    }
  }

  /**
   * Converts a date in the format MM/YYYY to a datastructure holding a month and year field.
   *
   * @param {string} monthYearDate - The string to convert.
   * @returns {DateObject} - Returns a date object containing the month and year.
   */
  #convertMonthYear (monthYearDate) {
    const [month, year] = this.#splitDate(monthYearDate)
    return this.#buildDateObject(null, month, year)
  }

  /**
   * Converts a date in the format YYYY/MM to a datastructure holding a month and year field.
   *
   * @param {string} yearMonthDate - The string to convert.
   * @returns {DateObject} - Returns a date object containing the month and year.
   */
  #convertYearMonth (yearMonthDate) {
    const [year, month] = this.#splitDate(yearMonthDate)
    return this.#buildDateObject(null, month, year)
  }

  /**
   * Converts a date in the format MM/DD/YYYY to a datastructure holding a date, month and year field.
   *
   * @param {string} monthDateYearDate - The string to convert.
   * @returns {DateObject} - Returns a date object containing the date, month and year.
   */
  #convertMonthDateYear (monthDateYearDate) {
    const [month, date, year] = this.#splitDate(monthDateYearDate)
    return this.#buildDateObject(date, month, year)
  }

  /**
   * Converts a date in the format DD/MM/YYYY to a datastructure holding a date, month and year field.
   *
   * @param {string} dateMonthYear - The string to convert.
   * @returns {DateObject} - Returns a date object containing the date, month and year.
   */
  #convertDateMonthYear (dateMonthYear) {
    const [date, month, year] = this.#splitDate(dateMonthYear)
    return this.#buildDateObject(date, month, year)
  }

  /**
   * Converts a date in the format YYYY/MM/DD to a datastructure holding a date, month and year field.
   *
   * @param {string} yearMonthDate - The string to convert.
   * @returns {DateObject} - Returns a date object containing the date, month and year.
   */
  #convertYearMonthDate (yearMonthDate) {
    const [year, month, date] = this.#splitDate(yearMonthDate)
    return this.#buildDateObject(date, month, year)
  }

  /**
   * Builds a data structure containing the date, month and year.
   *
   * @param {string} buildDate - The date of the date to convert, if null builds an object containing month and year.
   * @param {string} buildMonth - The month of the date to convert.
   * @param {string} buildYear - The year of the date to convert.'
   * @returns {DateObject} - Returns a date object which may have a null day field.
   */
  #buildDateObject (buildDate, buildMonth, buildYear) {
    if (buildDate !== null) {
      return new DateObject(buildYear, buildMonth, buildDate)
    } else {
      return new DateObject(buildYear, buildMonth, null)
    }
  }

  /**
   * Splits the passed string with the "/" symbol, returns it as an array.
   *
   * @param {string} dateToSplit - The date to split.
   * @returns {string[]} - Returns an array with the elements split by "/".
   */
  #splitDate (dateToSplit) {
    return dateToSplit.split('/')
  }
}
