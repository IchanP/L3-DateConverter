// TODO a shitload of imports

import '../pg222pb-front-page/index.js'

// const IMG_URL = (new URL(, import.meta.url)).href

const template = document.createElement('template')
template.innerHTML = `
<style>
</style>
<div class="root">
</div>`

/**
 * Defines the page controller, responsible for rendering the different pages of the application.
 */
class PageController extends HTMLElement {
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
   * Responsible for rendering the pages.
   */
  connectedCallback () {
    
  }
}

customElements.define('pg222pb-page-controller', PageController)
