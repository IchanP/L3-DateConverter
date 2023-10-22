// TODO rename this class.

import { DateConversionDetail } from './DataStructure/DateConversionDetail'
import { DateExtractor } from './DateExtractor'
import { LargeTextAcceptableBasicDateFormats, LargeTextAccpetableJapaneseEraDateFormats } from './Data/AcceptableDateFormatRegexes'
import { DateConverter } from './DateConverter'

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

  // eslint-disable-next-line jsdoc/require-returns-check
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

  // x 2000/12/23 x 1999/12/24 x 12/1990

  /**
   * Performs translation of all the dates in the text from western style calendars to the calendar specified by the #toCalendar field.
   * Western style calendars are Gregorian and Kōki.
   *
   * @returns {string} - Returns the text with the translated dates.
   */
  #translateWesternStyleDates () {
    const extractedDates = this.#extractWesternStyleDates()
    const translatedDates = this.#translateAllDates(extractedDates)
    this.#replaceDates(extractedDates, translatedDates)
    return this.#fullText
  }

  /**
   * Creates a new DateExtractor object and extracts the dates from the text.
   *
   * @returns {Array<string>} - Returns the extracted dates.
   */
  #extractWesternStyleDates () {
    const dateExtractor = new DateExtractor(LargeTextAcceptableBasicDateFormats, this.#fullText)
    return dateExtractor.extractDates()
  }

  /**
   * Translates the dates passed in the array to the calendar specified by the #toCalendar field.
   *
   * @param {Array<string>} datesToTranslate - The dates to perform the translation on.
   * @returns {Array<string>} - Returns the translated dates.
   */
  #translateAllDates (datesToTranslate) {
    const translatedDates = []
    for (const date of datesToTranslate) {
      const dateConversionDetail = new DateConversionDetail(this.#fromCalendar, this.#toCalendar, date)
      const dateConverter = new DateConverter(dateConversionDetail)
      translatedDates.push(dateConverter.translateDate())
    }
    return translatedDates
  }

  /**
   * Replaces the dates in the text with the translated dates.
   *
   * @param {Array<string>} originalDates - The dates to be replaced
   * @param {Array<string>} translatedDates - The translated dates.
   */
  #replaceDates (originalDates, translatedDates) {
    for (let i = 0; i < originalDates.length; i++) {
      this.#fullText = this.#fullText.replace(originalDates[i], translatedDates[i])
    }
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
