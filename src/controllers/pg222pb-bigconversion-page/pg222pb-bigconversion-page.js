import { DateConversionDetail } from '../../model/DataStructure/DateConversionDetail'
import { DateConvertorDetailValidator } from '../../model/DateConvertorDetailValidator'
import { FullTextDateConverter } from '../../model/FullTextDateConverter'
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

  // TODO DRY, same thing is seen in SimpleDateConversionPage.js

  /**
   * Handles the custom event 'copy' which is triggered when the user clicks the copy button in the SmallDateConverter component.
   *
   * @param {Event}  event - The event which triggered the callback.
   */
  #copyOnClickCallback (event) {
    const textToCopy = event.detail
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
  }

  /**
   * Converts the dates in the text to the desired calendar.
   *
   * @param {DateConversionDetail} conversionDetails - The text to find the dates and translate in.
   */
  #translateDatesInText (conversionDetails) {
    const largeDateConverter = new FullTextDateConverter(conversionDetails)
    const convertedText = largeDateConverter.translateDates()
    // TODO I think I need to make a new class for this
    // Essentially I need to get the dates from inside the text and then call convert date on each of them
    // Then re-add them to the text at their correct position...
  }
}

customElements.define('pg222pb-bigconversion-page', BigConversionPage)
