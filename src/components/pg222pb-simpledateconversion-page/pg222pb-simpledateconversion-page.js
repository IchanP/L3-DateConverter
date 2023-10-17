import { DateConversionDetail } from '../../DataStructure/DateConversionDetail.js'
import { Validator } from '../../Utility/Validator.js'
import '../pg222pb-smalldateconverter/index.js'

const template = document.createElement('template')
template.innerHTML = `
<style>
</style>
<p>
    <pg222pb-smalldateconverter></pg222pb-smalldateconverter>
</p>`

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
    const conversionDetails = event.detail
    // TODO this probably needs refactoring
    try {
      Validator.validateType(conversionDetails, DateConversionDetail)
    } catch (error) {
      console.error(error.message + 'buttonOnClickCallback, in pg222pb-simpledateconversion-page.js')
    }
    // NOTE i can access the shadowroot of dateConverter here
  }
}

customElements.define('pg222pb-simpledateconverison-page', SimpleDateConversionPage)
