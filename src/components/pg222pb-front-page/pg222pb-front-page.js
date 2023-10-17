// TODO a shitload of imports

// const IMG_URL = (new URL(, import.meta.url)).href

const template = document.createElement('template')
template.innerHTML = `
<style>
</style>`

/**
 * Defines the front page of this web application.
 */
class Pg222pbFrontPage extends HTMLElement {
  /**
   * Create an instance of the component.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('pg222pb-front-page', Pg222pbFrontPage)
