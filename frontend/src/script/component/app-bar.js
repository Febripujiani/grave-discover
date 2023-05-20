class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
               display: block;
               width: 100%;
               background-color: rgb(101, 136, 100);
               color: rgb(238, 238, 238);
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h2 {
               padding: 20px;
               display: flex;
               justify-content: center;
               align-item: center;
           }
       </style>
       <h2>MOVIE APPS</h2>`;
  }
}

customElements.define("app-bar", AppBar);
