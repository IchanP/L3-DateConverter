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

  /**
   * Extracts the dates from the full text.
   *
   * @returns {Array<string>} - Returns the extracted dates.
   */
  extractDates () {
    const matchedDates = []
    for (const format of Object.values(this.#acceptableDateFormats)) {
      const matchedExpressions = this.#fullText.match(format)
      console.log(matchedExpressions)
      if (matchedExpressions) {
        matchedDates.push(...matchedExpressions)
      }
    }

    this.#trimExtractedDates(matchedDates)
    return matchedDates
  }

  /**
   * Trims the extracted dates from whitespace.
   *
   * @param {Array<string>} extractedDates - The dates to trim.
   */
  #trimExtractedDates (extractedDates) {
    for (const date of extractedDates) {
      date.trim()
    }
  }
}

// x 2000/12/23 x 1999/12/24 x 12/1990
