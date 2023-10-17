import { ALinkBuilder } from '../../DataStructure/ALinkBuilder'

const template = document.createElement('template')
template.innerHTML = `
<style>
</style>
<div class="header-div">
</div>`

// TODO generalize this by making it a header link class
// Accept a datastructure with the callbacks and create an "a" element for each one.
// Maybe accept textcontent of link too?
/**
 * Defines a header class.
 */
export class LinkHeader extends HTMLElement {
  #aLinks
  /**
   * Create an instance of the component.
   *
   * @param {Array<ALinkBuilder>} aLinkBuilderArray - Accepts an array of ALinkBuilder objects, to build "a" elements from.
   */
  constructor (aLinkBuilderArray) {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.#buildaElements(aLinkBuilderArray)
  }

  /**
   * Attempts to build "a" elements from the array passed as an argument.
   *
   * @param {Array<ALinkBuilder>} aLinkBuilderArray - Accepts an array of ALinkBuilder objects, to build "a" elements from.
   */
  #buildaElements (aLinkBuilderArray) {
    try {
      // TODO refactor this to only have try catch in it
      this.#validateALinkBuilderArray(aLinkBuilderArray)
    } catch (error) {
      // NOTE console error for testing purposes
      console.error(error)
      // TODO render error message
      this.shadowRoot.querySelector('.header-div').textContent = `Error: ${error.message}`
    }
  }

  /**
   * Validates that the objects passed in the array are of the ALinkBuilder type.
   *
   * @param {Array<unknown>} aLinkBuilderArray - The array to validate.
   */
  #validateALinkBuilderArray (aLinkBuilderArray) {
    for (const obj of aLinkBuilderArray) {
      if (!(obj instanceof ALinkBuilder)) {
        throw new TypeError('The array passed to the constructor must contain only ALinkBuilder objects.')
      }
    }
  }

  /**
   * Executed when the element is inserted into the DOM.
   */
  connectedCallback () {
    // TODO refactor this completely
  }
}

customElements.define('pg222pb-link-header', LinkHeader)
