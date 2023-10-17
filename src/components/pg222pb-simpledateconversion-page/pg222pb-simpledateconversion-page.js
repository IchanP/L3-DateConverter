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
   */
  #buttonOnClickCallback () {
    console.log('WAHOOWA')
  }
}

customElements.define('pg222pb-simpledateconverison-page', SimpleDateConversionPage)
