import { DateConversionDetail } from '../../model/DataStructure/DateConversionDetail'
import { DateConvertorDetailValidator } from '../../model/DateConvertorDetailValidator'
import { DateConvertRenderer } from '../../view/pg222pb-smalldateconverter/pg222pb-smalldateconverter'

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

    const largeConvertorElement = new DateConvertRenderer(calendarTypes.acceptableCalendars, titleOfConverter)
    this.shadowRoot.appendChild(largeConvertorElement)
  }

  /**
   * Called when the element is inserted into the DOM.
   * Responsible for managing event listeners and etc from the big conversion page.
   * // TODO update this comment.
   */
  connectedCallback () {
    // TODO implement
  }
}

customElements.define('pg222pb-bigconversion-page', BigConversionPage)
