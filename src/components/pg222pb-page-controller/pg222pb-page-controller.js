// TODO a shitload of imports

import '../pg222pb-front-page/index.js'
import '../pg222pb-header/index.js'
import '../pg222pb-bigconversion-page/index.js'
import { LinkHeader } from '../pg222pb-header/pg222pb-header.js'

// const IMG_URL = (new URL(, import.meta.url)).href

const template = document.createElement('template')
template.innerHTML = `
 <style>

.root { 
    display: flex;
    flex-direction: column; 
    align-items: center; 
    height: 100vh; 
    margin: 0 auto;
}

 </style>
    <div class="root">
        <div class="page-container">
        </div>
    </div>
`

/**
 * Defines the page controller, responsible for rendering the different pages of the application.
 */
class PageController extends HTMLElement {
  #root
  #pageContainer
  #frontPageElement
  #bigTextConversionPageElement
  /**
   * Create an instance of the component and initializes fields.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    // Initialize the fields.
    this.#root = this.shadowRoot.querySelector('.root')
    this.#pageContainer = this.shadowRoot.querySelector('.page-container')
    this.#frontPageElement = document.createElement('pg222pb-front-page')
    this.#bigTextConversionPageElement = document.createElement('pg222pb-bigconversion-page')

    const header = new LinkHeader(this.#frontPageOnClickCallback.bind(this))
    this.#root.prepend(header)
  }

  /**
   * Called when the element is inserted into the DOM.
   * Renders the front page upon being inserted.
   */
  connectedCallback () {
    this.#renderPage(this.#bigTextConversionPageElement)
  }

  /**
   * Removes the current page and renders the page passed as an argument.
   *
   * @param {HTMLElement} page - The HTML element to render.
   */
  #renderPage (page) {
    while (this.#pageContainer.firstChild) {
      this.#pageContainer.removeChild(this.#pageContainer.firstChild)
    }
    this.#pageContainer.append(page)
  }

  /**
   * The callback function to pass to the Header component.
   * Executed when the link to the front page is clicked.
   *
   * @param {Event} e - The event object.
   */
  #frontPageOnClickCallback (e) {
    e.preventDefault()
    this.#renderPage(this.#frontPageElement)
  }
}

customElements.define('pg222pb-page-controller', PageController)
