import temporalConverter from 'temporalconverter'
import { DateStringBuilder } from '../DateStringBuilder'
import { CannotConvertError } from '../Errors/CannotConvertError'

/**
 * Wraps the temporalConverter public interface in a class.
 */
export class TemporalConverterWrapper {
  #dateStringBuilder
  #dateObject
  /**
   * Create an instance of the class.
   *
   * @param {object} dateTransformer - Shall be an object of either the BasicDateTransformer or the JapaneseEraDateTransformer.
   */
  constructor (dateTransformer) {
    this.#dateStringBuilder = new DateStringBuilder()
    this.#dateObject = dateTransformer.getDateObject()
  }
  // TODO might add a build date object function here,
  // depends on whether it's possible with a japanese era date object

  // TODO - Look over this note before hand in
  // NOTE - The functions performing conversions from Gregorian have hardcoded 'CE' as the era,
  // this is because the app does not yet support conversions from before the year 1 CE.

  /**
   * Converts from the Gregorian Calendar to the Koki Calendar.
   *
   * @returns {string} - Returns the converted date in the format "Kõki YYYY/MM"
   */
  convertGregorianToKoki () {
    const kokiFromGregorianYear = temporalConverter.KokiFromGregorian(this.#dateObject.year, 'CE')
    return this.#dateStringBuilder.addWesternMonthDate(kokiFromGregorianYear, this.#dateObject)
  }

  /**
   * Converts from the Kõki Calendar to the Gregorian Calendar.
   *
   * @returns {string} - Returns the converted date in the format "DD Month YYYY BCE/CE"
   */
  convertKokiToGregorian () {
    const gregorianFromKokiYear = temporalConverter.KokiToFormattedGregorian(Number(this.#dateObject.year))
    return this.#dateStringBuilder.addMonthDateToGregorian(gregorianFromKokiYear, this.#dateObject)
  }

  /**
   * Converts from the Kõki Calendar to the Japanese Era Calendar.
   *
   * @returns {string} - Returns the converted date in the format "Japanese Era YY"
   */
  convertKokiToJapaneseEra () {
    const yearToExtract = temporalConverter.KokiToFormattedGregorian(Number(this.#dateObject.year))
    const extractedGregorianYear = yearToExtract.split(' ')[0]
    return this.#tryConvertGregorianToJapaneseEra(extractedGregorianYear, this.#dateObject.month)
  }

  /**
   * Converts from the Gregorian Calendar to the Japanese Era Calendar.
   *
   * @returns {string} - Returns a string in the format "Japanese Era YY".
   */
  convertGregorianToJapaneseEra () {
    return this.#tryConvertGregorianToJapaneseEra(this.#dateObject.year, this.#dateObject.month)
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
  #tryConvertGregorianToJapaneseEra (year, month) {
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
      throw new CannotConvertError(this.#dateObject.year + '/' + this.#dateObject.month + (this.#dateObject.day ? '/' + this.#dateObject.day : ''))
    }
  }
}
