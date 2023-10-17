import { Validator } from '../../Utility/Validator'
import { AElementBuilder } from '../../DataStructure/AElementBuilder'
import { LinkElementBuilder } from './ALinkElementBuilder'

const IMG_URL = (new URL('../../../public/images/banner.jpg', import.meta.url)).href

const template = document.createElement('template')
template.innerHTML = `
<style>
    :root {
      width: 100vw;
    }
    .header-div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        width: 100vw;
        height: 5vh;
        font-size: 1.2rem;
        background-image: url(${IMG_URL});
    }

    .header-a {
        text-decoration: none;
        color: white;
        font-family: Arial;
        color: rgb(189, 189, 181);
        background-color: rgba(44, 12, 12, 0);
        padding: 1rem;
    }

    .header-a:hover {
      background-color: rgba(44, 12, 12, 0.5);
    }

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
    try {
      Validator.validateIsThisAnArray(aLinkBuilderArray)
      Validator.validateAllElementsOfType(aLinkBuilderArray, AElementBuilder)
    } catch (error) {
      console.error(error + ' in LinkHeader.prepareElements() , in pg222pb-link-header.js')
      return
    }
    const aElements = this.#buildLinkElements(aLinkBuilderArray)
    this.#addClassTagToElements(aElements)
    this.#addToShadowRoot(aElements)
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
  #addToShadowRoot (aElements) {
    const headerDiv = this.shadowRoot.querySelector('.header-div')
    aElements.forEach(aElement => headerDiv.appendChild(aElement))
  }
}

customElements.define('pg222pb-link-header', LinkHeader)
