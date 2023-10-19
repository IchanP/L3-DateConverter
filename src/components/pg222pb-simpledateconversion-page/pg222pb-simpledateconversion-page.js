import { DateConversionDetail } from '../../model/DataStructure/DateConversionDetail.js'
import { ErrorRenderer } from '../../Utility/ErrorRenderer.js'
import { Validator } from '../../Utility/Validator.js'
import { DateConvertorDetailValidator } from '../../model/DateConvertorDetailValidator.js'
import { SameCalendarError } from '../../model/Errors/SameCalendarError.js'
import '../pg222pb-smalldateconverter/index.js'
import { SmallDateConverter } from '../pg222pb-smalldateconverter/pg222pb-smalldateconverter.js'
import { InvalidDateFormatError } from '../../model/Errors/InvalidDateFormatError.js'
import { DateConverter } from '../../model/DateConverter.js'

const template = document.createElement('template')
template.innerHTML = `
<style>
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
    this.addEventListener('convert', this.#buttonOnClickCallback.bind(this))
  }

  /**
   * Called when the event 'convert' is catched by the event listener declared in connectedCallback.
   *
   * @param {Event} event - The event that triggered the callback.
   */
  #buttonOnClickCallback (event) {
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
    if (Validator.isSameType(error, SameCalendarError) || Validator.isSameType(error, InvalidDateFormatError)) {
      const errorElement = this.#dateConverter.getErrorElement()
      const errorRenderer = new ErrorRenderer(errorElement, error)
      errorRenderer.renderError(errorElement, error)
    }
  }
}

customElements.define('pg222pb-simpledateconverison-page', SimpleDateConversionPage)
