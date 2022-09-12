const template = document.createElement("template");
template.innerHTML = `
  <style>
    div {
      margin-top: 20px;
      color: purple;
      font-weight: bold;
    }
  </style>
  <div>
 <p>Web Component</p>
  </div>
`;

class SearchResult extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["name-attribute"];
  }
}

window.customElements.define("search-result", SearchResult);
