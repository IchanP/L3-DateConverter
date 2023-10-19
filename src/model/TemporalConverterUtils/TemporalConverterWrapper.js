import temporalConverter from 'temporalconverter'
import { BasicDateTransformer } from './BasicDateTransformer'

/**
 * Wraps the temporalConverter public interface in a class.
 */
export class TemporalConverterWrapper {
  #basicDateTransformer
  /**
   * Create an instance of the class.
   */
  constructor () {
    this.#basicDateTransformer = new BasicDateTransformer()
  }

  // TODO - Look over this note before hand in
  // NOTE - The functions performing conversions from Gregorian have hardcoded 'CE' as the era,
  // this is because the app does not yet support conversions from before the year 1 CE.

  /**
   * Converts from the Gregorian Calendar to the Koki Calendar.
   *
   * @param {string} dateToConvert - The date to convert.
   * @returns {string} - Returns the converted date in the format "Kõki YYYY/MM"
   */
  convertGregorianToKoki (dateToConvert) {
    const dateObject = this.#basicDateTransformer.getFormattedDate(dateToConvert)
    const kokiYear = temporalConverter.KokiFromGregorian(dateObject.year, 'CE')
    return kokiYear + `/${dateObject.month}`
  }

  /**
   * Converts from the Gregorian Calendar to the Japanese Era Calendar.
   *
   * @param {string} dateToConvert - The date to convert.
   */
  convertGregorianToJapaneseEra (dateToConvert) {

  }
}
