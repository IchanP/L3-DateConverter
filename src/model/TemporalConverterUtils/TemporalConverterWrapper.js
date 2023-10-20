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

  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * Converts from the Gregorian Calendar to the Japanese Era Calendar.
   *
   * @returns {string} - Returns a string in the format "Japanese Era YY".
   */
  convertGregorianToJapaneseEra () {
    try {
      return temporalConverter.GregorianToFormattedJpEra(Number(this.#dateObject.year), Number(this.#dateObject.month))
    } catch (error) {
      this.#handleJapaneseEraError(error)
    }
  }

  /**
   * Converts from the Kõki Calendar to the Gregorian Calendar.
   *
   * @returns {string} - Returns the converted date in the format "YYYY BCE/CE"
   */
  convertKokiToGregorian () {
    const gregorianFromKokiYear = temporalConverter.KokiToFormattedGregorian(Number(this.#dateObject.year))
    return this.#dateStringBuilder.addMonthDateToGregorian(gregorianFromKokiYear, this.#dateObject)
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
