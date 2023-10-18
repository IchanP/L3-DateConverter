/**
 * A class used to represent an error when the same calendar is used for both the from and to calendars.
 */
export class SameCalendarError extends Error {
  /**
   * Create an instance of the class.
   */
  constructor () {
    const erorrMessage = 'Same calendar was selected to convert from and to convert to.'
    super(erorrMessage)
    this.name = 'SameCalendarError'
  }
}
