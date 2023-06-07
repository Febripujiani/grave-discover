/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-unresolved */
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/style.css";
import "bootstrap";
import routes from "../routes/routes";
import UrlParser from "../routes/url-parse";
import DrawerInitiator from "../utils/drawer-initiator";

// class App {
//   constructor({ button, drawer, content }) {
//     this._button = button;
//     this._drawer = drawer;
//     this._content = content;

//     this._initialAppShell();
//   }

//   _initialAppShell() {
//     DrawerInitiator.init({
//       button: this._button,
//       drawer: this._drawer,
//       content: this._content,
//     });
//   }

//   async renderPage() {
//     const url = UrlParser.parseActiveUrlWithCombiner();
//     const page = routes[url];
//     this._content.innerHTML = await page.render();
//     await page.afterRender();
//     // const skipLinkElem = document.querySelector(".skip-link");
//     // skipLinkElem.addEventListener("click", (event) => {
//     //   event.preventDefault();
//     //   document.querySelector("#mainContent").focus();
//     // });
//   }
// }

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    if (page) {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } else {
      this._content.innerHTML = "<p>404 - Page not found</p>";
    }

    // const skipLinkElem = document.querySelector(".skip-link");
    // skipLinkElem.addEventListener("click", (event) => {
    //   event.preventDefault();
    //   document.querySelector("#mainContent").focus();
    // });
  }
}

export default App;
