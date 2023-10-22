import { DateConversionDetail } from '../../model/DataStructure/DateConversionDetail'
import { Validator } from '../../Utility/Validator'
import '../pg222pb-helptable/index.js'

const template = document.createElement('template')
template.innerHTML = `
<style>
    :host(pg222pb-smalldateconverter) {
      width: 100%;
    }
    #small-date-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
    form {
        display: flex; 
        gap: 16px;
        justify-content: center;
        width: 80%;
    }
    .input-group {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 8px; 
    }
    #left-input-group {
      align-items: flex-end;
    }
    #right-input-group {
      align-items: flex-start;
    }
    #right-input-wrapper {
      display: flex;
      flex: 1;
      width: 100%;
      gap: 8px;
    }
    form label {
        display: inline-block;
    }
    button {
      cursor: pointer;
    }
    .styledbutton {
      background-color: #110914;
      border: none;
      color: white;
      border-radius: 5px;                    
      padding: 10px 20px;                   
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3), inset 0px -2px 2px rgba(255, 255, 255, 0.2);
      text-shadow: 0px -1px 1px rgba(0, 0, 0, 0.3); 
      transition: all 0.2s ease-in-out;
      height: 100%;
      max-height: 35px;
    }
    .styledbutton:hover {
      background-color: #191a1f;
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4), inset 0px -3px 3px rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }
    .styledbutton:active {
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), inset 0px -1px 1px rgba(255, 255, 255, 0.2);
      transform: translateY(1px);
    }
    #middle-wrapper {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      gap: 8px;
      height: max-content;
    }
    #convertbutton {
      display: flex;
      height: 55%;
      font-family: var(--stylish-font);
      font-weight: bold;
      align-items: center;
    }
    #helpbutton {
      border-radius: 50%;
      border: none;
      font-weight: bold;
      background-color: #38373d;
      color: white;
      position: relative;  
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);  
    }
    select {
        display: inline-block;
        width: 100%;
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
    label {
      font-family: arial;
      font-weight: bold;
      letter-spacing: 2px;
    }
    .visible {
      display: block;
    }
    .invisible {
      display: none;
    }
    #help-wrapper {
      position: absolute;
      background-color: #38373d;
      width: 400%;
      top: 45%;
      z-index: 10;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2); 
      border: 1px solid rgba(255, 255, 255, 0.1); 
      border-radius: 4px; 
    }
    /* Styles for the input element passed in the constructor */
    input, textarea {
      background-color: var(--background);
      border: 3px solid #272735;
      font-family: var(--stylish-font);
      color: white;
      padding-left: 1rem;
    }
    input {
      width: 30%;
      min-height: 35px;
    }
    input:focus, textarea:focus {
      outline: 1px solid #49495f;
    }
    textarea {
      resize: none;
      width: 50%;
      height: 350px;
    }
</style>
<div id="small-date-wrapper">
    <h1>Small Date Converter</h1>
    <form>
        <div class="input-group" id="left-input-group">
            <div class="above-input">
                <label for="fromDate">From</label>
                <select name="fromDropdown">
                </select>
            </div>
        </div>

        <div id="middle-wrapper">
          <button id="helpbutton">?</button>
          <button id="convertbutton" class="styledbutton">Convert</button>
          <div class="invisible" id="help-wrapper">
            <pg222pb-helptable></pg222pb-helptable>
          </div>
        </div>

        <div class="input-group" id="right-input-group">
            <div class="above-input">
                <select name="toDropdown">
                </select>
                <label for="toDate">To</label>
            </div>
            <div id="right-input-wrapper">
            <button id="copybutton" class="styledbutton">
              <span style="font-size: .875em; margin-right: .125em; position: relative; top: -.25em; left: -.125em">
                📄<span style="position: absolute; top: .25em; left: .25em">📄</span>
              </span>
            </button>
           </div>
        </div>
    </form>
    <p id="errordisplayer"></p>
</div>
`

//  <input type="text" placeholder="Enter a date" name="fromDate" id="fromtextinput" autocomplete="off">
//  <input type="text" name="toDate" id="totextinput" disabled>

/**
 * Defines the component responsible for rendering the elements for converting dates.
 */
export class DateConvertRenderer extends HTMLElement {
  #convertButton
  #fromTextInputField
  #fromDropdown
  #toDropdown
  #copyButton
  /**
   * Initialize the fields of the class.
   *
   * @param {Array<string>} calendarsToPickFrom - An array of the calendar names the user shall be able to pick from.
   * @param {string} title - The title of the type of converter.
   * @param {Array<HTMLElement>} inputFields - The element pairs that the conversions shall be taken from and pasted to, only text and textareas have pre-defined styles.
   */
  constructor (calendarsToPickFrom, title, inputFields) {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.#insertDropDowns(calendarsToPickFrom)
    this.#insertTitle(title)
    this.#setInputAttributes(inputFields)
    this.#insertInputFields(inputFields)

    this.#convertButton = this.shadowRoot.querySelector('#convertbutton')
    this.#fromTextInputField = this.shadowRoot.querySelector('#fromtextinput')
    this.#fromDropdown = this.shadowRoot.querySelector('select[name="fromDropdown"]')
    this.#toDropdown = this.shadowRoot.querySelector('select[name="toDropdown"]')
    this.#copyButton = this.shadowRoot.querySelector('#copybutton')
  }

  // TODO reflect over the placement of the methods in this class

  /**
   * Builds the dropdown options that the user can choose from.
   *
   * @param {Array<string>} calendarsToPickFrom - The calendars the user can pick from.
   */
  #insertDropDowns (calendarsToPickFrom) {
    calendarsToPickFrom.forEach(calendar => {
      const option = document.createElement('option')
      option.value = calendar
      option.textContent = calendar
      this.shadowRoot.querySelector('select[name="fromDropdown"]').appendChild(option)
      this.shadowRoot.querySelector('select[name="toDropdown"]').appendChild(option.cloneNode(true))
    })
  }

  /**
   * Sets the H1 title of the component.
   *
   * @param {string} title - The title to set the H1 element to.
   */
  #insertTitle (title) {
    this.shadowRoot.querySelector('h1').textContent = title
  }

  // TODO remove if statements
  /**
   * Sets the attributes of the input fields.
   *
   * @param {Array<HTMLElement>} inputFields - The input fields that the component shall use for the conversions.
   */
  #setInputAttributes (inputFields) {
    if (inputFields) {
      inputFields[0].setAttribute('id', 'fromtextinput')
      inputFields[0].setAttribute('autocomplete', 'off')
      inputFields[1].setAttribute('id', 'totextinput')
      inputFields[1].setAttribute('disabled', '')
    }
  }

  /**
   * Inserts the input fields into the shadow DOM.
   *
   * @param {Array<HTMLElement>} inputFields - The input fields that the component shall use for the conversions.
   */
  #insertInputFields (inputFields) {
    if (inputFields) {
      this.shadowRoot.querySelector('#left-input-group').appendChild(inputFields[0])
      this.shadowRoot.querySelector('#right-input-wrapper').prepend(inputFields[1])
    }
  }

  /**
   * Renders the result of the conversion inside the locked input field.
   *
   * @param {string} convertedDate - The converted date to render
   */
  renderResult (convertedDate) {
    console.log('reached here?')
    this.shadowRoot.querySelector('#totextinput').value = convertedDate
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
    const helpButton = this.shadowRoot.querySelector('#helpbutton')

    helpButton.addEventListener('mouseover', this.#handleHelpOver.bind(this))
    helpButton.addEventListener('mouseleave', this.#handleHelpLeave.bind(this))
    this.#convertButton.addEventListener('click', this.#handleConvertEvent.bind(this))
    this.#copyButton.addEventListener('click', this.#handleCopyEvent.bind(this))
  }

  /**
   * Sets the class value of the div responsible for displaying user help to 'visible'.
   */
  #handleHelpOver () {
    const helpWrapper = this.shadowRoot.querySelector('#help-wrapper')
    helpWrapper.classList.add('visible')
    helpWrapper.classList.remove('invisible')
  }

  /**
   * Sets the class value of the div responsible for displaying user help to 'invisible'.
   */
  #handleHelpLeave () {
    const helpWrapper = this.shadowRoot.querySelector('#help-wrapper')
    helpWrapper.classList.add('invisible')
    helpWrapper.classList.remove('visible')
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

  /**
   * Prevents default execution of the event and dispatches a 'copy' event with the data from the unselectable field.
   *
   * @param {Event} event - The event object which triggered the callback.
   */
  #handleCopyEvent (event) {
    event.preventDefault()
    if (!Validator.isStringEmpty(this.shadowRoot.querySelector('#totextinput').value)) {
      this.dispatchEvent(this.#buildCopyEvent())
    }
  }

  /**
   * Builds a copy event and returns it.
   * The value from the #totextinput field is sent as data for the event.
   *
   * @returns {CustomEvent} - Returns the event 'copy' with the data from the input field.
   */
  #buildCopyEvent () {
    return new CustomEvent('copy', {
      bubbles: true,
      composed: true,
      detail: { data: this.shadowRoot.querySelector('#totextinput').value }
    })
  }
}

customElements.define('pg222pb-dateconverter', DateConvertRenderer)
