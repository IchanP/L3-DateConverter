import { DateConversionDetail } from './DataStructure/DateConversionDetail'
import { DateConvertorDetailValidator } from './DateConvertorDetailValidator'
import { InvalidDateFormatError } from './Errors/InvalidDateFormatError'
import { NotValidCalendarError } from './Errors/NotValidCalendarError'
import { SameCalendarError } from './Errors/SameCalendarError'
import { TemporalConverterWrapper } from './TemporalConverterUtils/TemporalConverterWrapper'

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
    this.#converterWrapper = new TemporalConverterWrapper()
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
  // eslint-disable-next-line accessor-pairs
  #setConversionDetails (conversionDetails) {
    const conversionValidator = new DateConvertorDetailValidator(conversionDetails)
    conversionValidator.validateDifferentCalendars()
    conversionValidator.validateAcceptableCalendars()
    conversionValidator.validateDateFormat()
    this.#conversionDetails = conversionDetails
  }

  // TODO add return values to the functions below

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
      this.#converterWrapper.convertGregorianToJapaneseEra(this.#conversionDetails.dateToConvert)
    }
  }
}
