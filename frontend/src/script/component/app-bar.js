class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
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
      <nav class="drawer" class="nav">
         <div id="hamburger" tabindex="0">
         <a id="menu" class="header__menu">☰</a>
        </div>
        <ul class="nav_list">
          <li class="nav_item"><a href="#">Beranda</a></li>
          <li class="nav_item"><a href="#">Tentang</a></li>
          <li class="nav_item"><a href="#" target="_blank">FAQ</a></li>
          <li class="nav_item"><a href="#">Tim Kami</a></li>
        </ul>
      </nav>`;
  }
}

customElements.define('app-bar', AppBar);
