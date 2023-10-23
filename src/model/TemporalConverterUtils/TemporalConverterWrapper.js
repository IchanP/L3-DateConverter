import temporalConverter from 'temporalconverter'
import { DateStringBuilder } from '../DateStringBuilder'
import { NoErasOnThatDateError } from '../Errors/NoErasOnThatDateError'
import { NotAnEraError } from '../Errors/NotAnEraError'
import { EraYearTooHighError } from '../Errors/EraYearTooHighError'
import { DateTransformer } from './DateTransformer'

/**
 * Wraps the temporalConverter public interface in a class.
 */
export class TemporalConverterWrapper {
  #dateStringBuilder
  #dateHolder
  /**
   * Create an instance of the class.
   *
   * @param {DateTransformer} dateTransformer - Shall be an object of either the BasicDateTransformer or the JapaneseEraDateTransformer.
   */
  constructor (dateTransformer) {
    this.#dateStringBuilder = new DateStringBuilder()
    this.#dateHolder = dateTransformer.getDateObject()
  }

  /**
   * Converts from the Gregorian Calendar to the Koki Calendar.
   *
   * @returns {string} - Returns the converted date in the format "Kõki YYYY/MM"
   */
  translateGregorianToKoki () {
    // 'CE' is hardcoded as the app does not yet support pre-CE dates.
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
      this.#handleToJapaneseEra(error)
    }
  }

  /**
   * Handles the errors thrown when translating to Japanese Era, and rethrows it as a different type.
   *
   * @throws {NoErasOnThatDateError} - Throws this error if the passed dates cannot be converted TO a Japanese Era date.
   * @param {Error} error - The error to handle.
   */
  #handleToJapaneseEra (error) {
    if (error.message === 'The passed arguments do not match any existing eras.') {
      throw new NoErasOnThatDateError(this.#dateHolder.year + '/' + this.#dateHolder.month + (this.#dateHolder.day ? '/' + this.#dateHolder.day : ''))
    }
  }

  /**
   * Converts from the Japanese Era Calendar to the Gregorian Calendar.
   *
   * @returns {string} - Returns the converted date in the format "DD Month YYYY BCE/CE"
   */
  translateJapaneseEraToGregorian () {
    const gregorianFromJapaneseEraYear = this.#tryTranslateJapaneseEraToGregorian(this.#dateHolder.name, this.#dateHolder.year)
    return this.#dateStringBuilder.addMonthDateToGregorian(gregorianFromJapaneseEraYear, this.#dateHolder)
  }

  /**
   * Converts from the Japanese Era Calendar to the Kõki Calendar.
   *
   * @returns {string} - Returns the converted date in the format "Kõki YYYY/MM"
   */
  translateJapaneseEraToKoki () {
    const gregorianYearToExtract = this.#tryTranslateJapaneseEraToGregorian(this.#dateHolder.name, this.#dateHolder.year)
    const extractedGregorianYear = gregorianYearToExtract.split(' ')[0]
    const kokiFromJapaneseEraYear = temporalConverter.KokiFromGregorian(extractedGregorianYear, 'CE')
    return this.#dateStringBuilder.addWesternMonthDate(kokiFromJapaneseEraYear, this.#dateHolder)
  }

  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * Attempts to convert the date from Japanese Era to Gregorian format.
   *
   * @param {string} eraName - The name of the era to convert from.
   * @param {string} eraYear - The year of the era to convert from.
   * @returns {string} - Returns the converted year in "YYYY CE" format.
   */
  #tryTranslateJapaneseEraToGregorian (eraName, eraYear) {
    try {
      return temporalConverter.JpEraToFormattedGregorian(eraName, Number(eraYear))
    } catch (error) {
      console.error(error)
      this.#handleFromJapaneseEra(error)
    }
  }

  /**
   * Handles the error thrown when converting from Japanese Era calendar, rehtrows it as a different type.
   *
   * @throws {NotAnEraError} - Throws this error if the passed era name is not a valid era name.
   * @param {Error} error - The error to handle.
   */
  #handleFromJapaneseEra (error) {
    if (error.message === 'Passed era name does not exist.') {
      throw new NotAnEraError(this.#dateHolder.name)
    }
    if (error.message === 'The era year is out of the higher range.') {
      throw new EraYearTooHighError(this.#dateHolder.year, this.#dateHolder.name)
    }
  }
}
