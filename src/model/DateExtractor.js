/**
 * Extracts date from a string based on the calendar type.
 */
export class DateExtractor {
  #acceptableDateFormats
  #fullText
  /**
   * Initializes the fields.
   *
   * @param {Array<RegExp>} acceptableDateFormats - The acceptable date formats for the calendar type.
   * @param {string} fullText - The full text to perform the extraction on.
   */
  constructor (acceptableDateFormats, fullText) {
    this.#acceptableDateFormats = acceptableDateFormats
    this.#fullText = fullText
  }

  // TODO requires testing with japanese era dates.

  /**
   * Extracts the dates from the full text.
   *
   * @returns {Array<string>} - Returns the extracted dates.
   */
  extractDates () {
    const matchedDates = []
    for (const format of Object.values(this.#acceptableDateFormats)) {
      const matchedExpressions = this.#fullText.match(format)
      if (matchedExpressions) {
        matchedDates.push(...matchedExpressions)
      }
    }
    return matchedDates.map(element => element.trim())
  }
}
