const template = document.createElement('template')
template.innerHTML = `
<style>
</style>
<div class="header-div">
    <a href="#" id="first-page-a" class="header-a">First Page</a>
</div>`

/**
 * Defines a header class.
 */
export class Header extends HTMLElement {
  #frontPageA
  /**
   * Create an instance of the component and binds the callback functions to their respective links.
   *
   * @param {Function} frontPageOnClickCallback - A callback function to bind to the front page link.
   */
  constructor (frontPageOnClickCallback) {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.#frontPageA = this.shadowRoot.querySelector('#first-page-a')
    this.#frontPageA.onclick = frontPageOnClickCallback
  }

  /**
   * Binds the callback functions passed to the constructor to their respective link elements.
   *
   * @param {Function} frontPageOnClickCallback - A callback function to bind to the front page link.
   */
  #bindCallbacksToaElements (frontPageOnClickCallback) {
    this.#frontPageA.onClick = frontPageOnClickCallback
  }

  /**
   * Executed when the element is inserted into the DOM.
   */
  connectedCallback () {
    // TODO refactor this completely
  }
}

customElements.define('pg222pb-header', Header)
