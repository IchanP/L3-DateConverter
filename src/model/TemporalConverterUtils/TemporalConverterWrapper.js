import temporalConverter from 'temporalconverter'
import { DateStringBuilder } from '../DateStringBuilder'
import { CannotConvertError } from '../Errors/CannotConvertError'

/**
 * Wraps the temporalConverter public interface in a class.
 */
export class TemporalConverterWrapper {
  #dateStringBuilder
  #dateHolder
  /**
   * Create an instance of the class.
   *
   * @param {object} dateTransformer - Shall be an object of either the BasicDateTransformer or the JapaneseEraDateTransformer.
   */
  constructor (dateTransformer) {
    this.#dateStringBuilder = new DateStringBuilder()
    this.#dateHolder = dateTransformer.getDateObject()
  }

  // TODO - Look over this note before hand in
  // NOTE - The functions performing conversions from Gregorian have hardcoded 'CE' as the era,
  // this is because the app does not yet support conversions from before the year 1 CE.

  /**
   * Converts from the Gregorian Calendar to the Koki Calendar.
   *
   * @returns {string} - Returns the converted date in the format "Kõki YYYY/MM"
   */
  translateGregorianToKoki () {
    const kokiFromGregorianYear = temporalConverter.KokiFromGregorian(this.#dateHolder.year, 'CE')
    return this.#dateStringBuilder.addWesternMonthDate(kokiFromGregorianYear, this.#dateHolder)
  }

  /**
   * Converts from the Kõki Calendar to the Gregorian Calendar.
   *
   * @returns {string} - Returns the converted date in the format "DD Month YYYY BCE/CE"
   */
  translateKokiToGregorian () {
    const gregorianFromKokiYear = temporalConverter.KokiToFormattedGregorian(Number(this.#dateHolder.year))
    return this.#dateStringBuilder.addMonthDateToGregorian(gregorianFromKokiYear, this.#dateHolder)
  }

  /**
   * Converts from the Kõki Calendar to the Japanese Era Calendar.
   *
   * @returns {string} - Returns the converted date in the format "Japanese Era YY"
   */
  translateKokiToJapaneseEra () {
    const yearToExtract = temporalConverter.KokiToFormattedGregorian(Number(this.#dateHolder.year))
    const extractedGregorianYear = yearToExtract.split(' ')[0]
    return this.#tryTranslateGregorianToJapaneseEra(extractedGregorianYear, this.#dateHolder.month)
  }

  /**
   * Converts from the Gregorian Calendar to the Japanese Era Calendar.
   *
   * @returns {string} - Returns a string in the format "Japanese Era YY".
   */
  translateGregorianToJapaneseEra () {
    return this.#tryTranslateGregorianToJapaneseEra(this.#dateHolder.year, this.#dateHolder.month)
  }

  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * Attempts to convert the date from Gregorian to Japanese Era format.
   * Handles errors thrown by the conversion.
   *
   * @param {string} year - May be of both string or number format, conversion is made inside the function.
   * @param {string} month - May be of both string or number format, conversion is made inside the function.
   * @returns {string} - Returns a string in the format "Japanese Era YY".
   */
  #tryTranslateGregorianToJapaneseEra (year, month) {
    try {
      return temporalConverter.GregorianToFormattedJpEra(Number(year), Number(month))
    } catch (error) {
      this.#handleJapaneseEraError(error)
    }
  }

  /**
   * Handles the errors thrown by Japanes Era conversions, and rethrows it as a different type.
   *
   * @param {Error} error - The error to handle.
   */
  #handleJapaneseEraError (error) {
    if (error.message === 'The passed arguments do not match any existing eras.') {
      throw new CannotConvertError(this.#dateHolder.year + '/' + this.#dateHolder.month + (this.#dateHolder.day ? '/' + this.#dateHolder.day : ''))
    }
  }

  /**
   * Converts from the Japanese Era Calendar to the Gregorian Calendar.
   */
  translateJapaneseEraToGregorian () {

  }
}
