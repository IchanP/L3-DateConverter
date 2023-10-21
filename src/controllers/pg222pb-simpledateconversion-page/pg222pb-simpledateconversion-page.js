import { DateConversionDetail } from '../../model/DataStructure/DateConversionDetail.js'
import { ErrorRenderer } from '../../view/ErrorRenderer.js'
import { Validator } from '../../Utility/Validator.js'
import { DateConvertorDetailValidator } from '../../model/DateConvertorDetailValidator.js'
import { SameCalendarError } from '../../model/Errors/SameCalendarError.js'
import { SmallDateConverter } from '../../view/pg222pb-smalldateconverter/pg222pb-smalldateconverter.js'
import { InvalidDateFormatError } from '../../model/Errors/InvalidDateFormatError.js'
import { DateConverter } from '../../model/DateConverter.js'
import { NoErasOnThatDateError } from '../../model/Errors/NoErasOnThatDateError.js'
import { NotAnEraError } from '../../model/Errors/NotAnEraError.js'
import { EraYearTooHighError } from '../../model/Errors/EraYearTooHighError.js'

const template = document.createElement('template')
template.innerHTML = `
<style>
  :root {
    width: 100vw;
  }
</style>
`

/**
 * Controller for the Simple Date Conversion Page.
 */
class SimpleDateConversionPage extends HTMLElement {
  #dateConverter
  /**
   * Create an instance of the component.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    const calendarTypes = new DateConvertorDetailValidator(new DateConversionDetail())
    const dateConverter = new SmallDateConverter(calendarTypes.acceptableCalendars)
    this.shadowRoot.appendChild(dateConverter)

    this.#dateConverter = this.shadowRoot.querySelector('pg222pb-smalldateconverter')
  }

  /**
   * Called when the element is inserted into the DOM.
   * Declares event listeners for the Simple Date Conversion Page.
   *
   */
  connectedCallback () {
    this.addEventListener('convert', this.#convertOnClickCallback.bind(this))
    this.addEventListener('copy', this.#copyOnClickCallback.bind(this))
  }

  // TODO make a note since I'm not ordering the methods in this class the same as the others

  /**
   * Handles the custom event 'copy' which is triggered when the user clicks the copy button in the SmallDateConverter component.
   *
   * @param {Event}  event - The event which triggered the callback.
   */
  #copyOnClickCallback (event) {
    const textToCopy = event.detail.data
    navigator.clipboard.writeText(textToCopy)
  }

  /**
   * Called when the event 'convert' is catched by the event listener declared in connectedCallback.
   *
   * @param {Event} event - The event that triggered the callback.
   */
  #convertOnClickCallback (event) {
    const conversionDetails = event.detail.data

    //  this.#checkForUserErrors(conversionDetails)
    const convertedDate = this.#convertDate(conversionDetails)
    if (convertedDate) {
      this.#dateConverter.renderResult(convertedDate)
    }
  }

  // eslint-disable-next-line jsdoc/require-returns
  /**
   * Calls the model to perform conversion.
   *
   * @param {DateConversionDetail} dateDetailsToConvert - The date details to convert.
   */
  #convertDate (dateDetailsToConvert) {
    try {
      const dateConverter = new DateConverter(dateDetailsToConvert)
      return dateConverter.convertDate()
    } catch (error) {
      console.error(error.message + ' in convertDate, in pg222pb-simpledateconversion-page.js') // TODO add path ?
      this.#handleUserError(error)
    }
  }

  /**
   * Checks whether the error is a user error, and if so, renders it to the view.
   *
   * @param {Error} error - The error to handle.
   */
  #handleUserError (error) {
    if (this.#isUserError(error)) {
      const errorElement = this.#dateConverter.getErrorElement()
      const errorRenderer = new ErrorRenderer(errorElement, error)
      errorRenderer.renderError(errorElement, error)
    }
  }

  /**
   * Checks whether the error is a user error.
   *
   * @param {Error} error - The error to check instance of.
   * @returns {boolean} - Returns true if the error is a user error, false otherwise.
   */
  #isUserError (error) {
    return Validator.isSameType(error, SameCalendarError) || Validator.isSameType(error, InvalidDateFormatError) ||
    Validator.isSameType(error, NoErasOnThatDateError) || Validator.isSameType(error, NotAnEraError) ||
    Validator.isSameType(error, EraYearTooHighError)
  }
}

customElements.define('pg222pb-simpledateconverison-page', SimpleDateConversionPage)
