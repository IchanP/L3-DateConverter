// TODO a shitload of imports

import '../pg222pb-front-page/index.js'
import '../pg222pb-link-header/index.js'
import '../pg222pb-bigconversion-page/index.js'
import { LinkHeader } from '../pg222pb-link-header/pg222pb-link-header.js'
import { AElementBuilder } from '../pg222pb-link-header/AElementBuilder.js'

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
    this.#pageContainer = this.shadowRoot.querySelector('.page-container')
    this.#frontPageElement = document.createElement('pg222pb-front-page')
    this.#bigTextConversionPageElement = document.createElement('pg222pb-bigconversion-page')
  }

  // NOTE I'm considering the building of the items required to be part of rendering the header.
  // They are the same concept in my head.

  /**
   * Builds and renders the header of the application.
   */
  #buildHeader () {
    const aBuilders = [new AElementBuilder('Front Page', this.#frontPageOnClickCallback.bind(this)),
      new AElementBuilder('Big Text Conversion Page', this.#bigTextConversionPageOnClickCallback.bind(this))
      // TODO ONE MORE
    ]
    const header = new LinkHeader(aBuilders)
    this.shadowRoot.querySelector('.root').prepend(header)
  }

  // NOTE grouping these together and keeping header above
  // makes it easier to see what is going on.

  /**
   * Called when the element is inserted into the DOM.
   * Renders the front page upon being inserted.
   */
  connectedCallback () {
    this.#buildHeader()
    this.#renderPage(this.#frontPageElement)
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

  /**
   * The callback function to pass to the Header component.
   * Executed when the link to the big conversion page is clicked.
   *
   * @param {Event} e - The event object.
   */
  #bigTextConversionPageOnClickCallback (e) {
    e.preventDefault()
    this.#renderPage(this.#bigTextConversionPageElement)
  }
}

customElements.define('pg222pb-page-controller', PageController)
