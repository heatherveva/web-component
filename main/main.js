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

class MyComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

}

window.customElements.define("my-component", MyComponent);
