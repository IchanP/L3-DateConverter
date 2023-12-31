import { Validator } from '../../Utility/Validator'
import { AElementBuilder } from '../../model/DataStructure/AElementBuilder'
import { LinkElementBuilder } from './ALinkElementBuilder'

const IMG_URL = (new URL('../../../public/images/banner.jpg', import.meta.url)).href

const template = document.createElement('template')
template.innerHTML = `
<style>
    :root {
      width: 100vw;
    }
    .header-div {
      background-image: url(${IMG_URL});
      background-size: cover;
    }

    .header-a {
      display: flex;
      align-items: centeR;
      text-decoration: none;
      color: white;
      font-family: Arial;
      color: rgb(189, 189, 181);
      background-color: rgba(65, 56, 56, 0.3);
      height: 100%;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .header-a:hover {
      background-color: rgba(44, 12, 12, 0.5);
    }

    .background-filter {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      width: 100vw;
      height: 5vh;
      font-size: 1.2rem;
      background-color: rgba(0, 0, 0, 0.4);
    }

</style>
<div class="header-div">
  <div class="background-filter">
  </div>
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
    this.#constructAElements(aLinkBuilderArray)
  }

  // NOTE this does break the single responsibility principle.
  // However I'm not sure how to do this without putting the try catch in the constructor which I feel is worse..

  /**
   * Construct the a elements, also performs validation before constructing the elements.
   *
   * @param {Array<AElementBuilder>} aLinkBuilderArray - The array of ALinkBuilder objects to work on.
   */
  #constructAElements (aLinkBuilderArray) {
    this.#validateArray(aLinkBuilderArray)
    const aElements = this.#buildLinkElements(aLinkBuilderArray)
    this.#addClassTagToElements(aElements)
    this.#appendToShadowroot(aElements)
  }

  /**
   * Validates the array of ALinkBuilder objects.
   *
   * @param {Array<AElementBuilder>} arrayToValidate - The array of ALinkBuilder objects to perform validation on.
   */
  #validateArray (arrayToValidate) {
    try {
      Validator.validateIsThisAnArray(arrayToValidate)
      Validator.validateAllElementsOfType(arrayToValidate, AElementBuilder)
    } catch (error) {
      console.error(error + ' in LinkHeader.validateArray , in pg222pb-link-header.js')
    }
  }

  /**
   * Constructs the a elements and appends them to the shadowroot.
   *
   * @param {Array<AElementBuilder>} aLinkBuilderArray - The array of ALinkBuilder objects to convert to elements.
   * @returns {Array<HTMLAnchorElement>} - The array of a elements.
   */
  #buildLinkElements (aLinkBuilderArray) {
    return aLinkBuilderArray.map(aElementToBuild => new LinkElementBuilder(aElementToBuild).createElement())
  }

  /**
   * Adds the class tag "header-a" to the a elements.
   *
   * @param {Array<HTMLAnchorElement>} aElements - The array of a elements to perform the operation on.
   */
  #addClassTagToElements (aElements) {
    aElements.forEach(aElement => aElement.classList.add('header-a'))
  }

  /**
   * Adds the a elements to the shadow root inside the "header-div" element.
   *
   * @param {Array<HTMLAnchorElement>} aElements - The array of a elements to add to the shadow root.
   */
  #appendToShadowroot (aElements) {
    const headerDiv = this.shadowRoot.querySelector('.background-filter')
    aElements.forEach(aElement => headerDiv.appendChild(aElement))
  }
}

customElements.define('pg222pb-link-header', LinkHeader)
