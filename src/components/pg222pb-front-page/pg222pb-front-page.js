// TODO a shitload of imports

// const IMG_URL = (new URL(, import.meta.url)).href

const template = document.createElement('template')
template.innerHTML = `
<style>
</style>
<p>
YO THIS IS FRONTPAGE
</p>`

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
