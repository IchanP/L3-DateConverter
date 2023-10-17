import { ErrorRenderer } from '../../Utility/ErrorRenderer'
import { Validator } from '../../Utility/Validator'
import { AElementBuilder } from './AElementBuilder'
import { LinkElementBuilder } from './ALinkElementBuilder'

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
    const validator = new Validator()
    try {
      validator.validateIsThisAnArray(aLinkBuilderArray)
      validator.validateAllElementsOfType(aLinkBuilderArray, AElementBuilder)
    } catch (error) {
      console.error(error + ' in LinkHeader.prepareElements() , in pg222pb-link-header.js')
      return
    }
    this.#buildLinkElements(aLinkBuilderArray)
  }

  /**
   * Constructs the a elements and appends them to the shadowroot.
   *
   * @param {Array<AElementBuilder>} aLinkBuilderArray - The array of ALinkBuilder objects to convert to elements.
   */
  #buildLinkElements (aLinkBuilderArray) {
    const aElements = aLinkBuilderArray.map(aElementToBuild => new LinkElementBuilder(aElementToBuild).createElement())
    this.shadowRoot.querySelector('.header-div').append(...aElements)
  }
}
 
customElements.define('pg222pb-link-header', LinkHeader)
