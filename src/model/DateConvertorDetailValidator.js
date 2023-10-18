import { DateConversionDetail } from '../DataStructure/DateConversionDetail'
import { Validator } from '../Utility/Validator'
import { SameCalendarError } from './SameCalendarError'

/**
 * Performs checks on the DateConversionDetail object.
 */
export class DateConvertorDetailValidator {
  #conversionDetails
  /**
   * Initializes the fields of the class.
   *
   * @param {DateConversionDetail} conversionDetails - The details to validate.
   */
  constructor (conversionDetails) {
    Validator.validateType(conversionDetails, DateConversionDetail)
    this.#conversionDetails = conversionDetails
  }

  /**
   * Verifies that the user has selected two different calendars.
   */
  verifyDifferentCalendars () {
    if (this.#conversionDetails.fromCalendar === this.#conversionDetails.toCalendar) {
      throw new SameCalendarError()
    }
  }
}
