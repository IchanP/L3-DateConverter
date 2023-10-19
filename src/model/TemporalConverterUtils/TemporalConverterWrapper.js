import temporalConverter from 'temporalconverter'
import { BasicDateTransformer } from './BasicDateTransformer'
import { DateObject } from '../DataStructure/DateObject'

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
    return kokiYear + this.#buildWesternMonthDayString(dateObject)
  }

  /**
   * Converts from the Gregorian Calendar to the Japanese Era Calendar.
   *
   * @param {string} dateToConvert - The date to convert.
   */
  convertGregorianToJapaneseEra (dateToConvert) {

  }

  /**
   * Builds a string in /MM/DD format from a date object.
   * The /DD part is optional, depending on whether the dateObject.day field is null.
   *
   * @param {DateObject} dateObject - The date object to build the string from.
   * @returns {string} - Returns a string in /MM/DD format.
   */
  #buildWesternMonthDayString (dateObject) {
    return `/${dateObject.month}` + (dateObject.day !== null ? `/${dateObject.day}` : '')
  }
}
