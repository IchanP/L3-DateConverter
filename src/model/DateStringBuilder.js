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
   * @param {string} westernStyleYear - The year to add month and day to.
   * @param {DateObject} dateObject - The date object containing the month and day to add to the string.
   * @returns {string} - Returns the date string in the format "YYYY/MM/DD" or "YYYY/MM".
   */
  addWesternMonthDate (westernStyleYear, dateObject) {
    return `${westernStyleYear}` + (dateObject.month ? `/${dateObject.month}` : '') + (dateObject.day ? `/${dateObject.day}` : '')
  }

  /**
   * Inserts the month and date into a string matching "YYYY BC/AD/BCE/CE".
   * Month and date are inserted as "DD MonthName" before the year.
   *
   * @param {string} gregorianYear - The year to add the month and day to.
   * @param {DateObject} dateObject - The date object containing the month and day to add to the string.
   * @returns {string} - Returns a string in the format "DD MonthName YYYY BC/AD/BCE/CE", DD and MonthName may both be omitted.
   */
  addMonthDateToGregorian (gregorianYear, dateObject) {
    return (dateObject.day ? `${dateObject?.day} ` : '') + (dateObject.month ? `${this.#monthNames[dateObject.month - 1]} ` : ' ') + `${gregorianYear}`
  }
}
