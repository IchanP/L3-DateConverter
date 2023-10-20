import { DateObject } from './DateObject'

/**
 * Extends the DateObject class with a name field.
 */
export class NamedDateObject extends DateObject {
  #name
  /**
   * Create an instance of the class.
   *
   * @param {string} name - The name of the date.
   * @param {string} year - The year of the date.
   * @param {string} month - The month of the date.
   * @param {string} day - The day of the date, may be null
   */
  constructor (name, year, month, day) {
    super(year, month, day)
    this.#name = name
  }

  /**
   * Getter for the name field.
   *
   * @returns {string} - Returns the private field name.
   */
  get name () {
    return this.#name
  }
}
