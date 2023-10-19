// TODO maybe add validation here?
// TODO refactor this to a proper class?

/**
 * A data structure encapsulating the data required to make a date conversion.
 */
export class DateConversionDetail {
  #fromCalendar
  #toCalendar
  #dateToConvert
  /**
   * Initializes the fields of the class.
   *
   * @param {string} fromCalendar - The calendar to convert from.
   * @param {string} toCalendar - The calendar to convert to.
   * @param {string} dateToConvert - The date to convert.
   */
  constructor (fromCalendar, toCalendar, dateToConvert) {
    this.#fromCalendar = fromCalendar
    this.#toCalendar = toCalendar
    this.#dateToConvert = dateToConvert
  }

  /**
   * Getter for the date to convert.
   *
   * @returns {string} - Returns the private field fromCalendar.
   */
  get fromCalendar () {
    return this.#fromCalendar
  }

  /**
   * Getter for the date to convert.
   *
   * @returns {string} - Returns the private field toCalendar.
   */
  get toCalendar () {
    return this.#toCalendar
  }

  /**
   * Getter for the date to convert.
   *
   * @returns {string} - Returns the private field dateToConvert.
   */
  get dateToConvert () {
    return this.#dateToConvert
  }
}
