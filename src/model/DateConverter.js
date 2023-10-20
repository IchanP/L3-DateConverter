import { DateConversionDetail } from './DataStructure/DateConversionDetail'
import { DateConvertorDetailValidator } from './DateConvertorDetailValidator'
import { InvalidDateFormatError } from './Errors/InvalidDateFormatError'
import { NotValidCalendarError } from './Errors/NotValidCalendarError'
import { SameCalendarError } from './Errors/SameCalendarError'
import { TemporalConverterWrapper } from './TemporalConverterUtils/TemporalConverterWrapper'
import { BasicDateTransformer } from './TemporalConverterUtils/BasicDateTransformer'
import { JapaneseEraDateTransformer } from './TemporalConverterUtils/JapaneseEraDateTransformer'

/**
 * Handles the conversion of dates.
 */
export class DateConverter {
  #conversionDetails
  #converterWrapper
  /**
   * Initializes the fields.
   *
   * @param {DateConversionDetail} conversionDetails - The details of the conversion to be performed.
   */
  constructor (conversionDetails) {
    this.#setConversionDetails(conversionDetails)
    const dateTransformer = this.#conversionDetails.fromCalendar === 'Japanese Era'
      ? new JapaneseEraDateTransformer(this.#conversionDetails.dateToConvert)
      : new BasicDateTransformer(this.#conversionDetails.dateToConvert)
    this.#converterWrapper = new TemporalConverterWrapper(dateTransformer)
  }

  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * Performs the conversion from one calendar to another.
   *
   * @returns {string} - Returns the converted date.
   */
  convertDate () {
    if (this.#conversionDetails.fromCalendar === 'Gregorian') {
      return this.#convertFromGregorian()
    }
    if (this.#conversionDetails.fromCalendar === 'Kōki') {
      return this.#convertFromKoki()
    }
    if (this.#conversionDetails.fromCalendar === 'Japanese Era') {
      return this.#convertFromJapaneseEra()
    }
  }

  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * Handles the conversion of dates from Gregorian to the other calendars.
   *
   * @returns {string} - Returns the converted date in either Kōki or Japanese Era format.
   */
  #convertFromGregorian () {
    if (this.#conversionDetails.toCalendar === 'Kōki') {
      return this.#converterWrapper.convertGregorianToKoki(this.#conversionDetails.dateToConvert)
    }
    if (this.#conversionDetails.toCalendar === 'Japanese Era') {
      return this.#converterWrapper.convertGregorianToJapaneseEra(this.#conversionDetails.dateToConvert)
    }
  }

  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * Handles the conversion of dates from Kōki to the other calendars.
   *
   * @returns {string} - Returns the converted date in either Gregorian or Japanese Era format.
   */
  #convertFromKoki () {
    if (this.#conversionDetails.toCalendar === 'Gregorian') {
      return this.#converterWrapper.convertKokiToGregorian(this.#conversionDetails.dateToConvert)
    }
    if (this.#conversionDetails.toCalendar === 'Japanese Era') {
      return this.#converterWrapper.convertKokiToJapaneseEra(this.#conversionDetails.dateToConvert)
    }
  }

  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * Handles the conversion of dates from Japanese Era to the other calendars.
   *
   * @returns {string} - Returns the converted date in either Gregorian or Kõki format.
   */
  #convertFromJapaneseEra () {
    if (this.#conversionDetails.toCalendar === 'Gregorian') {
      return this.#converterWrapper.convertJapaneseEraToGregorian(this.#conversionDetails.dateToConvert)
    }
    if (this.#conversionDetails.toCalendar === 'Kōki') {
      return this.#converterWrapper.convertJapaneseEraToKoki(this.#conversionDetails.dateToConvert)
    }
  }

  /**
   * Sets the details of the conversion, if the validation passes.
   *
   * @param {DateConversionDetail} conversionDetails - The details of the conversion to be performed.
   * @throws {TypeError} - Throws a typeError if the argument is not of type DateConversionDetail.
   * @throws {SameCalendarError} - Throws a SameCalendarError if the user has selected the same calendar for both the from and to calendars.
   * @throws {NotValidCalendarError} - Throws an error if the calendar is not an acceptable calendar.
   * @throws {InvalidDateFormatError} - Throws an InvalidDateFormatError if the date is not valid.
   */
  #setConversionDetails (conversionDetails) {
    const conversionValidator = new DateConvertorDetailValidator(conversionDetails)
    conversionValidator.validateDifferentCalendars()
    conversionValidator.validateAcceptableCalendars()
    conversionValidator.validateDateFormat()
    this.#conversionDetails = conversionDetails
  }
}
