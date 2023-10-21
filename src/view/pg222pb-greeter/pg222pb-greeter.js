const template = document.createElement('template')

template.innerHTML = `
<style>
    :host(pg222pb-greeter) {
        width: 100%;
    }
    h1 {
        font-size: 2.5rem;
    }
    #greeter-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        flex-direction: column;
        gap: 1%;
    }
    #greeter-wrapper p {
        margin-bottom: 0.5rem;
        font-family: var(--readable-text);
    }
</style>

<div id="greeter-wrapper">
    <h1>Date Converter</h1>
    <p>This is a small project, allowing for the ability to translate dates between the Kõki, Gregorian and Japanese Era calendars.</p>
    <p>You can simply choose to transfer one date or scan a text and replace all the dates with your chosen calendar.</p>
</div>
`

/**
 * A simple greeter view.
 */
class Greeter extends HTMLElement {
  /**
   * Create an instance of the component.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('pg222pb-greeter', Greeter)
