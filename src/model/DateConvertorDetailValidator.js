import { DateConversionDetail } from './DataStructure/DateConversionDetail'
import { Validator } from '../Utility/Validator'
import { SameCalendarError } from './Errors/SameCalendarError'
import { NotValidCalendarError } from './Errors/NotValidCalendarError'
import { BasicCalendarDateValidator } from './BasicCalendarDateValidator'
import { InvalidDateFormatError } from './Errors/InvalidDateFormatError'
import { JapaneseEraDateValidator } from './JapaneseEraDateValidator'

/**
 * Performs validation for DateConverterDetail objects.
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

  /**
   * Checks whether the passed in calendars is in the acceptable calendar list.
   *
   * @throws {NotValidCalendarError} - Throws an error if the calendar is not an acceptable calendar.
   */
  validateAcceptableCalendars () {
    this.#validateAcceptableCalendar(this.#conversionDetails.fromCalendar)
    this.#validateAcceptableCalendar(this.#conversionDetails.toCalendar)
  }

  /**
   * Validates that the fromCalendar field on the conversionDetails field is an acceptable calendar.
   *
   * @param {string} calendarToValidate - The calendar to perform the validation on
   * @throws {NotValidCalendarError} - Throws an error if the calendar is not an acceptable calendar.
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
   *
   * @throws {NotValidCalendarError} - Throws an error if the calendar is not an acceptable calendar.
   */
  validateDateFormat () {
    // Switch case has dependency to acceptableCalendars
    switch (this.#conversionDetails.fromCalendar) {
      case 'Gregorian':
        this.#validateWesternStyleDateFormat()
        break
      case 'Kōki':
        this.#validateWesternStyleDateFormat()
        break
      case 'Japanese Era':
        this.#validateJapaneseEraDateFormat()
        break
      default:
        throw new NotValidCalendarError(this.#conversionDetails.fromCalendar)
    }
  }

  /**
   * Validates that the user has input a valid date format for calendars that can be written using the western date type format.
   *
   * @throws {InvalidDateFormatError} - Throws an InvalidDateFormatError if the date is not valid.
   */
  #validateWesternStyleDateFormat () {
    const westernDateValidator = new BasicCalendarDateValidator(this.#conversionDetails.dateToConvert)
    westernDateValidator.validateDate()
  }

  /**
   * Validates that the user has input a valid date format for the Japanese Era calendar.
   *
   * @throws {InvalidDateFormatError} - Throws an InvalidDateFormatError if the date is not valid.
   */
  #validateJapaneseEraDateFormat () {
    const eraValidator = new JapaneseEraDateValidator(this.#conversionDetails.dateToConvert)
    eraValidator.validateDate()
  }
}
