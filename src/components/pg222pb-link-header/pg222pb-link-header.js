import { ErrorRenderer } from '../../Utility/ErrorRenderer'
import { Validator } from '../../Utility/Validator'
import { AElementBuilder } from './AElementBuilder'

const template = document.createElement('template')
template.innerHTML = `
<style>
</style>
<div class="header-div">
</div>`

/**
 * Defines a header class.
 */
export class LinkHeader extends HTMLElement {
  /**
   * Create an instance of the component.
   *
   * @param {Array<AElementBuilder>} aLinkBuilderArray - Accepts an array of ALinkBuilder objects, to build "a" elements from.
   */
  constructor (aLinkBuilderArray) {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.#prepareElements(aLinkBuilderArray)
  }

  // NOTE they are listed in the order they are called.

  /**
   * Prepares the elements to be built and appended by validating them first.
   *
   * @param {Array<AElementBuilder>} aLinkBuilderArray - The array of ALinkBuilder objects to work on.
   */
  #prepareElements (aLinkBuilderArray) {
    // NOTE DOES Array.isArray() violate abstraction level rule?
    if (Array.isArray(aLinkBuilderArray) && new Validator().isAllElementsOfType(aLinkBuilderArray, AElementBuilder)) {
      this.#buildLinkElements(aLinkBuilderArray)
    } else {
      this.#handleError(new TypeError('The array passed to the constructor must contain only AElementBuilder objects.'))
    }
  }

  /**
   * Verifies that the array passed to the constructor contains only ALinkBuilder objects.
   *
   * @param {Array<unknown>} aLinkBuilderArray - The array to verify.
   * @returns {boolean} - True if the array contains only ALinkBuilder objects, false otherwise.
   */
  /* #isValidALinkBuilderArray (aLinkBuilderArray) {
    for (const obj of aLinkBuilderArray) {
      if (!(obj instanceof AElementBuilder)) {
        return false
      }
    }
    return true
  } */

  /**
   * Constructs the a elements and appends them to the shadowroot.
   *
   * @param {Array<AElementBuilder>} aLinkBuilderArray - The array of ALinkBuilder objects to convert to elements.
   */
  #buildLinkElements (aLinkBuilderArray) {
    const aElements = []
    for (const aElementToBuild of aLinkBuilderArray) {
      const aElement = document.createElement('a')
      aElement.textContent = aElementToBuild.aLinkTextContent
      aElement.onclick = aElementToBuild.onClickCallback
      aElement.href = ''
      aElements.push(aElement)
    }
    // TODO make this prettier
    this.shadowRoot.querySelector('.header-div').append(...aElements)
  }

  /**
   * Calls the ErrorRenderer class to render the error.
   *
   * @param {Error} error - The error to handle.
   */
  #handleError (error) {
    // eslint-disable-next-line no-new
    new ErrorRenderer(this.shadowRoot.querySelector('.header-div'), error)
  }

  /**
   * Executed when the element is inserted into the DOM.
   */
  connectedCallback () {
    // TODO refactor this completely
  }
}

customElements.define('pg222pb-link-header', LinkHeader)
