const template = document.createElement('template')
template.innerHTML = `
<style>
</style>
<p>
YO THIS IS BIG-CONVERSION-PAGE
</p>`

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
