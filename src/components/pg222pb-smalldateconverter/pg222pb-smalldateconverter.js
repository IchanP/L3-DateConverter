import { DateConversionDetail } from '../../DataStructure/DateConversionDetail'
import { Validator } from '../../Utility/Validator'

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
        display: inline-block;
    }
    button {
        cursor: pointer;
    }
    select {
        display: inline-block;
        width: 65%;
    }
    .above-input {
        display: flex;
        gap: 15%;
    }
    #errordisplayer {
        color: red;
        font-size: 0.7rem;
        font-family: arial;
    }
</style>
<div>
    <h1>Small Date Converter</h1>
    <form>
        <div class="input-group">
            <div class="above-input">
                <label for="fromDate">From</label>
                <select name="fromDropdown">
                    <option value="gregorian">Gregorian</option>
                    <option value="koki">Kōki</option>
                    <option value="jpEra">Japanese Era</option>
                </select>
            </div>
            <input type="text" placeholder="Enter a date" name="fromDate" id="fromtextinput" autocomplete="off">
        </div>

        <button id="convertbutton">Convert</button>

        <div class="input-group">
            <div class="above-input">
                <label for="toDate">To</label>
                <select name="toDropdown">
                    <option value="gregorian">Gregorian</option>
                    <option value="koki">Kōki</option>
                    <option value="jpEra">Japanese Era</option>
                </select>
            </div>
            <input type="text" name="toDate" id="totextinput" disabled>
        </div>
        <button id="copybutton">Copy</button>
    </form>
    <p id="errordisplayer"></p>
</div>
`

// TODO write explanation for what is accepted as input.
// TODO also need to make a dropdown for the different calendars

/**
 * Defines the component responsible for rendering the elements for converting dates.
 */
export class SmallDateConverter extends HTMLElement {
  #convertButton
  #fromTextInputField
  #fromDropdown
  #toDropdown
  /**
   * Initialize the fields of the class.
   *
   * @param {Array<string>} calendarsToPickFrom - An array of the calendar names the user shall be able to pick from.
   */
  constructor (calendarsToPickFrom) {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.#buildDropDown(calendarsToPickFrom)

    this.#convertButton = this.shadowRoot.querySelector('button')
    this.#fromTextInputField = this.shadowRoot.querySelector('#fromtextinput')
    this.#fromDropdown = this.shadowRoot.querySelector('select[name="fromDropdown"]')
    this.#toDropdown = this.shadowRoot.querySelector('select[name="toDropdown"]')
  }

  // TODO reflect over the placement of the methods in this class

  /**
   * Builds the dropdown options that the user can choose from.
   *
   * @param {Array<string>} calendarsToPickFrom - The calendars the user can pick from.
   */
  #buildDropDown (calendarsToPickFrom) {
    // TODO implement this
  }

  /**
   * Getter for the element responsible for rendering an error message.
   *
   * @returns {HTMLElement} - Returns the HTML element responsible for displaying user error messages.
   */
  getErrorElement () {
    return this.shadowRoot.querySelector('#errordisplayer')
  }

  /**
   * Called when the element is inserted into the DOM.
   * Responsible for declaring event listeners for the different input fields.
   */
  connectedCallback () {
    this.#convertButton.addEventListener('click', this.#handleConvertEvent.bind(this))
  }

  /**
   * Prevents default execution of event and dispatches the event 'convert' with the data from the input field.
   *
   * @param {Event} event - The event object which triggered the callback.
   */
  #handleConvertEvent (event) {
    event.preventDefault()
    if (!Validator.isStringEmpty(this.#fromTextInputField.value)) {
      this.dispatchEvent(this.#buildConvertEvent())
    }
  }

  /**
   * Builds the convert event and returns it.
   * The values from the text input and select elements are used as data for the event.
   *
   * @returns {CustomEvent} - Returns the event 'convert' with the data from the input fields.
   */
  #buildConvertEvent () {
    return new CustomEvent('convert', {
      bubbles: true,
      composed: true,
      detail: { data: new DateConversionDetail(this.#fromDropdown.value, this.#toDropdown.value, this.#fromTextInputField.value) }
    })
  }
}

customElements.define('pg222pb-smalldateconverter', SmallDateConverter)
