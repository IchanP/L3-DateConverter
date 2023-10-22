import { Validator } from '../../Utility/Validator'
import { DateConversionDetail } from '../../model/DataStructure/DateConversionDetail'
import { DateConvertorDetailValidator } from '../../model/DateConvertorDetailValidator'
import { SameCalendarError } from '../../model/Errors/SameCalendarError'
import { FullTextDateConverter } from '../../model/FullTextDateConverter'
import { ErrorRenderer } from '../../view/ErrorRenderer'
import { DateConvertRenderer } from '../../view/pg222pb-dateconverter/pg222pb-dateconverter'

const template = document.createElement('template')
template.innerHTML = `
<style>
</style>
`

/**
 * Defines the page of the application responsible for converting dates in longer text.
 */
class BigConversionPage extends HTMLElement {
  #dateConverter
  /**
   * Create an instance of the component.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    const calendarTypes = new DateConvertorDetailValidator(new DateConversionDetail())
    const titleOfConverter = 'Text Converter'
    const inputFields = this.#buildTextAreaFields()

    const largeConvertorElement = new DateConvertRenderer(calendarTypes.acceptableCalendars, titleOfConverter, inputFields)
    this.shadowRoot.appendChild(largeConvertorElement)

    this.#dateConverter = this.shadowRoot.querySelector('pg222pb-dateconverter')
  }

  /**
   * Builds the text area fields for the Big Conversion Page.
   *
   * @returns {Array<HTMLTextAreaElement>} - Returns an array of the two text area fields.
   */
  #buildTextAreaFields () {
    const userInputField = document.createElement('textarea')
    userInputField.setAttribute('placeholder', 'Enter text here')
    const copyFromClipboardField = document.createElement('textarea')
    return [userInputField, copyFromClipboardField]
  }

  /**
   * Called when the element is inserted into the DOM.
   * Responsible for managing event listeners and etc from the big conversion page.
   */
  connectedCallback () {
    this.addEventListener('convert', this.#convertOnclickCallback.bind(this))
    this.addEventListener('copy', this.#copyOnClickCallback.bind(this))
  }

  /**
   * Handles the custom event 'copy' which is triggered when the user clicks the copy button in the SmallDateConverter component.
   *
   * @param {Event}  event - The event which triggered the callback.
   */
  #copyOnClickCallback (event) {
    const textToCopy = event.detail.data
    navigator.clipboard.writeText(textToCopy)
  }

  // TODO make note about conversionDetails in regards to meaningful names
  // Since I can't see what type it is even in my IDE I think naming it after the data structure it is is fine
  // As it's merely being passed around as the type it is here.
  /**
   * Called when the custom event "convert" is caught.
   *
   * @param {Event} event - The event which triggered the callback.
   */
  #convertOnclickCallback (event) {
    const conversionDetails = event.detail.data
    const convertedText = this.#translateDatesInText(conversionDetails)
    if (convertedText) {
      this.#dateConverter.renderResult(convertedText)
    }
  }

  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * Converts the dates in the text to the desired calendar.
   *
   * @param {DateConversionDetail} conversionDetails - The text to find the dates and translate in.
   * @returns {string} - Returns the text with the translated dates.
   */
  #translateDatesInText (conversionDetails) {
    try {
      const largeDateConverter = new FullTextDateConverter(conversionDetails)
      return largeDateConverter.translateDates()
    } catch (error) {
      console.error(error.message + ' in translateDatesInText, in pg222pb-bigconversion-page.js')
      this.#isUserError() || this.#handleUserError(error)
    }
  }

  /**
   * Checks whether the error is a user error, and if so, renders it to the view.
   *
   * @param {Error} error - The error to handle.
   */
  #handleUserError (error) {
    const errorElement = this.#dateConverter.getErrorElement()
    const errorRenderer = new ErrorRenderer(errorElement, error)
    errorRenderer.renderError(errorElement, error)
  }

  /**
   * Checks whether the error is a user error.
   *
   * @param {Error} error - The error to check instance of.
   * @returns {boolean} - Returns true if the error is a user error, false otherwise.
   */
  #isUserError (error) {
    return Validator.isSameType(error, SameCalendarError)
  }
}

customElements.define('pg222pb-bigconversion-page', BigConversionPage)
