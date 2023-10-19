/**
 * A class used to represent an error when a calendar is not an accepted type of calendar.
 */
export class NotValidCalendarError extends Error {
  /**
   * Create an instance of the class.
   *
   * @param {string} calendarName - The name of the calendar that is not valid.
   */
  constructor (calendarName) {
    const erorrMessage = `${calendarName} is not an accepted calendar.`
    super(erorrMessage)
    this.name = 'NotValidCalendarError'
  }
}
