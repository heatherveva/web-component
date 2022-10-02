const template = document.createElement("template");
template.innerHTML = `
  <style>
    button {
      border-style: none;
      margin-top: 20px;
      color: white;
      font-weight: bold;
      background-color: #CB3036;
      font-style: bold;
      font-family: Arial, Helvetica, sans-serif;
      padding: 10px 25px 10px 25px;
    }
  </style>
  <div>
  <a href="https://www.bitovi.com/" target="_blank">
 <button>Visit Bitovi</button>
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
