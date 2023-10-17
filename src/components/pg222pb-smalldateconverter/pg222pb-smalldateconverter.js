const template = document.createElement('template')
template.innerHTML = `
<style>
    h1 {
        text-align: center;
    }
    form {
        display: flex; 
        gap: 16px;
        align-items: flex-end;
    }

    .input-group {
        display: flex;
        flex-direction: column; 
        gap: 8px; 
    }

    form label {
        display: block;
    }
    button {
        cursor: pointer;
    }
</style>
<div>
    <h1>Small Date Converter</h1>
    <form>
        <div class="input-group">
            <label for="fromDate">From</label>
            <input type="text" placeholder="Enter a date" name="fromDate" id="fromtextinput">
        </div>

        <button id="convertbutton">Convert</button>

        <div class="input-group">
            <label for="toDate">To</label>
            <input type="text" name="toDate" id="totextinput" disabled>
        </div>
        <button id="copybutton">Copy</button>
    </form>
</div>
`

// TODO write explanation for what is accepted as input.

/**
 * Defines the component responsible for rendering the elements for converting dates.
 */
class SmallDateConverter extends HTMLElement {
  #convertButton
  #fromTextInputField
  /**
   * Initialize the fields of the class.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.#convertButton = this.shadowRoot.querySelector('button')
    this.#fromTextInputField = this.shadowRoot.querySelector('#fromtextinput')
  }

  /**
   * Called when the element is inserted into the DOM.
   * Responsible for declaring event listeners for the different input fields.
   */
  connectedCallback () {
    this.#convertButton.addEventListener('click', this.#dispatchConvertEvent.bind(this))
  }

  /**
   * Dispatches the custom convert event, bubbles through the shadowDom.
   */
  #dispatchConvertEvent () {
    this.dispatchEvent(new CustomEvent('convert', { bubbles: true, composed: true }))
  }
}

customElements.define('pg222pb-smalldateconverter', SmallDateConverter)
