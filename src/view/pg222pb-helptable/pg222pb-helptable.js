const template = document.createElement('template')

template.innerHTML = `
<style>
    caption {
        white-space: nowrap;
        padding-bottom: 0.5rem;
    }
    table {
        border-collapse: collapse;
        width: max-content;
        margin-bottom: 20px;
        margin: 0 auto;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        font-family: var(--stylish-font)
    }

    th, td {
        border: 1px solid #000;
        padding: 8px 12px;
        text-align: left;
    }
    caption {
        wrap: nowrap;
    }
</style>
<table>
    <caption>Gregorian and Kõki Date Formats</caption>
    <thead>
        <tr>
            <th>Acceptable Date Formats</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>YYYY/MM/DD</td>
        </tr>
        <tr>
            <td>DD/MM/YYYY</td>
        </tr>
        <tr>
            <td>MM/DD/YYYY</td>
        </tr>
        <tr>
            <td>MM/YYYY</td>
        </tr>
        <tr>
            <td>YYYY/MM</td>
        </tr>
    </tbody>
</table>

<table>
    <caption>Japanese Era Date Formats</caption>
    <thead>
        <tr>
            <th>Acceptable Date Formats</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>"Era Name" YY/MM</td>
        </tr>
        <tr>
            <td>"Era Name" YY</td>
        </tr>
    </tbody>
</table>
`

/**
 * Defines the component responsible for rendering the help table.
 */
class HelpTable extends HTMLElement {
  /**
   * Create an instance of the component.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('pg222pb-helptable', HelpTable)
