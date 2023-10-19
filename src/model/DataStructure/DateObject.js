/**
 * Data structure for holding a date.
 */
export class DateObject {
  #year
  #month
  #day
  /**
   * Create an instance of the class.
   *
   * @param {string} year - The year of the date
   * @param {string} month - The month of the date
   * @param {string} day - The day of the date, may be null
   */
  constructor (year, month, day) {
    this.#year = year
    this.#month = month
    this.#day = day
  }

  /**
   * Getter for the year field.
   *
   * @returns {string} - Returns the private field year.
   */
  get year () {
    return this.#year
  }

  /**
   * Getter for the month field.
   *
   * @returns {string} - Returns the private field month.
   */
  get month () {
    return this.#month
  }

  /**
   * Getter for the day field.
   *
   * @returns {string} - Returns the private field day.
   */
  get day () {
    return this.#day
  }
}
