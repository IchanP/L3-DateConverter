import { DateConversionDetail } from '../../model/DataStructure/DateConversionDetail.js'
import { ErrorRenderer } from '../../Utility/ErrorRenderer.js'
import { Validator } from '../../Utility/Validator.js'
import { DateConvertorDetailValidator } from '../../model/DateConvertorDetailValidator.js'
import { SameCalendarError } from '../../model/Errors/SameCalendarError.js'
import '../pg222pb-smalldateconverter/index.js'
import { SmallDateConverter } from '../pg222pb-smalldateconverter/pg222pb-smalldateconverter.js'

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

    this.#checkForUserErrors(conversionDetails)
  }

  /**
   * Checks whether the user has made any user errors, and if so, renders them to the view.
   *
   * @param {DateConversionDetail} dateDetailsToCheck - The date details to check for user errors.
   */
  #checkForUserErrors (dateDetailsToCheck) {
    try {
      const conversionValidator = new DateConvertorDetailValidator(dateDetailsToCheck)
      conversionValidator.validateDifferentCalendars()
      conversionValidator.validateAcceptableCalendars()
      conversionValidator.validateDateFormat()
    } catch (error) {
      // TODO implement different error handling depending on type of error
      // TODO maybe break out the if statement should it be repeated somewhere.
      console.error(error.message + ' in checkForUserErrors, in pg222pb-simpledateconversion-page.js')
      if (Validator.isSameType(error, SameCalendarError)) {
        const errorElement = this.#dateConverter.getErrorElement()
        const errorRenderer = new ErrorRenderer(errorElement, error)
        errorRenderer.renderError(errorElement, error)
      }
    }
  }
}

customElements.define('pg222pb-simpledateconverison-page', SimpleDateConversionPage)
