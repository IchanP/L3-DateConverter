import { DateConversionDetail } from '../DataStructure/DateConversionDetail'
import { Validator } from '../Utility/Validator'
import { SameCalendarError } from './SameCalendarError'

/**
 * Performs checks on the DateConversionDetail object.
 */
export class DateConvertorDetailValidator {
  #conversionDetails
  #acceptableCalendars = ['Gregorian', 'Kōki', 'Japanese Era']
  /**
   * Initializes the fields of the class.
   *
   * @param {DateConversionDetail} conversionDetails - The details to validate.
   * @throws {TypeError} - Throws a TypeError if the argument is not of type DateConversionDetail.
   */
  constructor (conversionDetails) {
    Validator.validateType(conversionDetails, DateConversionDetail)
    this.#conversionDetails = conversionDetails
  }

  /**
   * Returns a frozen array of acceptable calendars.
   *
   * @returns {Array<string>} - Returns a frozen array of acceptable calendars.
   */
  get acceptableCalendars () {
    return Object.freeze(this.#acceptableCalendars)
  }

  /**
   * Verifies that the user has selected two different calendars.
   *
   * @throws {SameCalendarError} - Throws a SameCalendarError if the user has selected the same calendar for both the from and to calendars.
   */
  validateDifferentCalendars () {
    if (this.#conversionDetails.fromCalendar === this.#conversionDetails.toCalendar) {
      throw new SameCalendarError()
    }
  }

  // TODO add validation that the passed calendar is in the list of acceptable calendars

  /**
   * Verifies that the user has input a valid date format for the selected calendar to convert from.
   */
  validateValidDateFormat () {
    // Switch case has dependency to acceptableCalendars
    switch (this.#conversionDetails.fromCalendar) {
      case 'Gregorian':
        this.#validateGregorianDateFormat()
        break
      case 'Kōki':
        this.#validateKokiDateFormat()
        break
      case 'Japanese Era':
        this.#validateJapaneseEraDateFormat()
        break
      default:
        // TODO throw an error here?
        break
    }
  }

  /**
   * Validates that the user has input a valid date format for the Gregorian calendar.
   */
  #validateGregorianDateFormat () {

  }

  /**
   * Valdiates that the user has input a valid date format for the Koki calendar.
   */
  #validateKokiDateFormat () {
  }

  /**
   * Validates that the user has input a valid date format for the Japanese Era calendar.
   */
  #validateJapaneseEraDateFormat () {
  }
}
