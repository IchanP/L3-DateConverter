import { DateConversionDetail } from './DataStructure/DateConversionDetail'
import { Validator } from '../Utility/Validator'
import { SameCalendarError } from './Errors/SameCalendarError'
import { NotValidCalendarError } from './Errors/NotValidCalendarError'
import { GregorianCalendarDateValidator } from './GregorianCalendarDateValidator'

/**
 * Performs validation for DateConverterDetail objects.
 */
export class DateConvertorDetailValidator {
  #conversionDetails
  // TODO maybe change these to hold classes
  // And not be an array?
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

  /**
   * Checks whether the passed in calendars is in the acceptable calendar list.
   */
  validateAcceptableCalendars () {
    this.#validateAcceptableCalendar(this.#conversionDetails.fromCalendar)
    this.#validateAcceptableCalendar(this.#conversionDetails.toCalendar)
  }

  /**
   * Validates that the fromCalendar field on the conversionDetails field is an acceptable calendar.
   *
   * @param {string} calendarToValidate - The calendar to perform the validation on
   */
  #validateAcceptableCalendar (calendarToValidate) {
    for (const calendar of this.#acceptableCalendars) {
      if (calendar === calendarToValidate) {
        return
      }
    }
    throw new NotValidCalendarError(calendarToValidate)
  }

  /**
   * Verifies that the user has input a valid date format for the selected calendar to convert from.
   */
  validateDateFormat () {
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
    const gregorianValidator = new GregorianCalendarDateValidator(this.#conversionDetails.dateToConvert)
    gregorianValidator.validateDate()
  }

  /**
   * Valdiates that the user has input a valid date format for the Kōki calendar.
   */
  #validateKokiDateFormat () {
  }

  /**
   * Validates that the user has input a valid date format for the Japanese Era calendar.
   */
  #validateJapaneseEraDateFormat () {
  }
}
