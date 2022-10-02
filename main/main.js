const template = document.createElement("template");
template.innerHTML = `
  <style>
    button {
      margin-top: 20px;
      color: white;
      font-weight: bold;
      background-color: black;
    }
  </style>
  <div>
  <a href="https://www.google.com" target="_blank">
 <button>SEARCH</button>
 </a>
  </div>
`;

class MyComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("my-component", MyComponent);
