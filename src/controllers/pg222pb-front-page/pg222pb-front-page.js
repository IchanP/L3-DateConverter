import '../../view/pg222pb-greeter/index.js'

const template = document.createElement('template')
template.innerHTML = `
<style>
</style>

<pg222pb-greeter></pg222pb-greeter>
`

/**
 * Defines the front page of this web application.
 */
class FrontPage extends HTMLElement {
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
   * Responsible for managing event listeners and etc from the front page.
   * // TODO update this comment.
   */
  connectedCallback () {
    // TODO implement
  }
}

customElements.define('pg222pb-front-page', FrontPage)
