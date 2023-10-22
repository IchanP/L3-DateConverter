// TODO rename this class.

import { DateConversionDetail } from './DataStructure/DateConversionDetail'
import { DateExtractor } from './DateExtractor'
import { AcceptableBasicDateFormats, AcceptableJapaneseEraDateFormats } from './Data/AcceptableDateFormatRegexes'

/**
 * Translates all the dates found in the text to the desired calendar.
 */
export class FullTextDateConverter {
  #fullText
  #fromCalendar
  #toCalendar
  /**
   * Initializes the fields.
   *
   * @param {DateConversionDetail} conversionDetails - The text to extract the dates from.
   */
  constructor (conversionDetails) {
    this.#fullText = conversionDetails.dateToConvert
    this.#fromCalendar = conversionDetails.fromCalendar
    this.#toCalendar = conversionDetails.toCalendar
  }

  /**
   * Performs the translation of all the dates in the text.
   *
   * @returns {string} - Returns the text with the translated dates.
   */
  translateDates () {
    if (this.#isWesternStyleCalendar()) {
      return this.#translateWesternStyleDates()
    }
    if (this.#isJapaneseEraCalendar()) {
      return this.#isJapaneseEraCalendar()
    }
  }

  /**
   *
   */
  #translateWesternStyleDates () {
    this.#extractWesternStyleDates()
  }

  /**
   *
   */
  #extractWesternStyleDates () {
    const dateExtractor = new DateExtractor(AcceptableBasicDateFormats, this.#fullText)
    dateExtractor.extractDates()
  }

  // TODO another note about formatting here.

  /**
   * Checks whether the #fromCalendar field is a western style calendar.
   *
   * @returns {boolean} - Returns true if the #fromCalendar field is Gregorian or Kōki, else false.
   */
  #isWesternStyleCalendar () {
    return this.#fromCalendar === 'Gregorian' || this.#fromCalendar === 'Kōki'
  }

  /**
   * Checks whether the #fromCalendar field is a Japanese Era calendar.
   *
   * @returns {boolean} - Returns true if the #fromCalendar field is Japanese Era, else false.
   */
  #isJapaneseEraCalendar () {
    return this.#fromCalendar === 'Japanese Era'
  }
}
