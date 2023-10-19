import temporalConverter from 'temporalconverter'
import { DateStringBuilder } from '../DateStringBuilder'

/**
 * Wraps the temporalConverter public interface in a class.
 */
export class TemporalConverterWrapper {
  #dateTransformer
  #dateStringBuilder
  /**
   * Create an instance of the class.
   *
   * @param {object} dateTransformer - Should be an object of either the BasicDateTransformer or the JapaneseEraDateTransformer.
   */
  constructor (dateTransformer) {
    this.#dateTransformer = dateTransformer
    this.#dateStringBuilder = new DateStringBuilder()
  }
  // TODO might add a build date object function here,
  // depends on whether it's possible with a japanese era date object

  // TODO - Look over this note before hand in
  // NOTE - The functions performing conversions from Gregorian have hardcoded 'CE' as the era,
  // this is because the app does not yet support conversions from before the year 1 CE.

  /**
   * Converts from the Gregorian Calendar to the Koki Calendar.
   *
   * @param {string} gregorianYear - The Gregorian year to convert
   * @returns {string} - Returns the converted date in the format "Kõki YYYY/MM"
   */
  convertGregorianToKoki (gregorianYear) {
    const gregorianDateObject = this.#dateTransformer.getDateObject()
    const kokiFromGregorianYear = temporalConverter.KokiFromGregorian(gregorianDateObject.year, 'CE')
    return this.#dateStringBuilder.addWesternMonthDate(kokiFromGregorianYear, gregorianDateObject)
  }

  /**
   * Converts from the Gregorian Calendar to the Japanese Era Calendar.
   *
   * @param {string} dateToConvert - The date to convert.
   */
  convertGregorianToJapaneseEra (dateToConvert) {

  }

  /**
   * Converts from the Kõki Calendar to the Gregorian Calendar.
   *
   * @param {string} kokiYear - The Koki year to convert.
   * @returns {string} - Returns the converted date in the format "YYYY BCE/CE"
   */
  convertKokiToGregorian (kokiYear) {
    return temporalConverter.KokiToFormattedGregorian(Number(kokiYear))
  }
}
