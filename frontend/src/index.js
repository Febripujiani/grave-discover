/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import App from "./script/view/app";
import "./styles/style.css";
import "./styles/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";

const app = new App({
  button: document.querySelector("#hamburger-menu"),
  drawer: document.querySelector("#drawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
