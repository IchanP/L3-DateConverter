/**
 * A class used to represent an error when the date is not accepted for the calendar.
 */
export class EraYearTooHighError extends Error {
  /**
   * Create an instance of the class.
   *
   * @param {string} eraYear - The invalid date in string format.
   * @param {string} eraName - The name of the era that the year is too high for.
   */
  constructor (eraYear, eraName) {
    const erorrMessage = `The year ${eraYear} does not exist in the era ${eraName}.`
    super(erorrMessage)
    this.name = 'EraYearTooHighError'
  }
}
