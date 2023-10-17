// TODO a shitload of imports

import '../pg222pb-front-page/index.js'
import '../pg222pb-header/index.js'
import { Header } from '../pg222pb-header/pg222pb-header.js'

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
    </div>
`

/**
 * Defines the page controller, responsible for rendering the different pages of the application.
 */
class PageController extends HTMLElement {
  #root
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
    this.#frontPageElement = document.createElement('pg222pb-front-page')
    // this.#bigTextConversionPageElement = document.createElement('') // TODO implement

    const header = new Header(this.#frontPageOnClickCallback.bind(this))
    this.#root.append(header)
  }

  /**
   * Called when the element is inserted into the DOM.
   * Renders the front page upon being inserted.
   */
  connectedCallback () {
    this.#renderPage()
  }

  /**
   * Inserts the passed argument into the div "root" of the shadow DOM.
   *
   * @param {HTMLElement} page - The HTML element to render.
   */
  #renderPage (page) {
    // TODO remove old page.
    this.#root.append(page)
  }

  /**
   * The callback function to pass to the Header component.
   * Executed when the link to the front page is clicked.
   *
   * @param {object} e - The event object.
   */
  #frontPageOnClickCallback (e) {
    e.preventDefault()
    this.#renderPage(this.#frontPageElement)
  }
}

customElements.define('pg222pb-page-controller', PageController)
