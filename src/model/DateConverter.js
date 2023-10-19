import { DateConversionDetail } from './DataStructure/DateConversionDetail'
import { DateConvertorDetailValidator } from './DateConvertorDetailValidator'
import { InvalidDateFormatError } from './Errors/InvalidDateFormatError'
import { NotValidCalendarError } from './Errors/NotValidCalendarError'
import { SameCalendarError } from './Errors/SameCalendarError'

/**
 * Handles the conversion of dates.
 */
export class DateConverter {
  #conversionDetails
  /**
   * Initializes the fields.
   *
   * @param {DateConversionDetail} conversionDetails - The details of the conversion to be performed.
   */
  constructor (conversionDetails) {
    this.#setConversionDetails(conversionDetails)
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
}
