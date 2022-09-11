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

    this.shadowRoot.querySelector("a").href = "";
  }

  static get observedAttributes() {
    return ["name-attribute"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "name-attribute") {
      this.shadowRoot.querySelector(
        "a"
      ).href = `https://www.google.com/search?q=${newValue}`;
    }
  }
}

window.customElements.define("search-result", SearchResult);
