import { DateObject } from './DataStructure/DateObject'

/**
 * Builds date strings to be shown in the view.
 */
export class DateStringBuilder {
  #monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']

  /**
   * Adds month and date to the string passed as first argument in.
   * If dateObject does not have a day field, the day field is not added to the string.
   *
   * @param {string} year - The year to add month and day to.
   * @param {DateObject} dateObject - The date object containing the month and day to add to the string.
   * @returns {string} - Returns the date string in the format "YYYY/MM/DD" or "YYYY/MM".
   */
  addWesternMonthDate (year, dateObject) {
    return `${year}/${dateObject.month}` + (dateObject.day !== null ? `/${dateObject.day}` : '')
  }

  /**
   * Inserts the month and date into a string matching "YYYY BC/AD/BCE/CE".
   * Month and date are inserted as "DD MonthName" before the year.
   *
   * @param {string} year - The year to add the month and day to.
   * @param {DateObject} dateObject - The date object containing the month and day to add to the string.
   * @returns {string} - Returns a string in the format "DD MonthName YYYY BC/AD/BCE/CE", DD may be omitted.
   */
  addMonthDateToGregorian (year, dateObject) {
    return (dateObject.day !== null ? `${dateObject?.day} ` : '') + `${this.#monthNames[dateObject.month - 1]} ${year}`
  }
}
