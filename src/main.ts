import { App } from "./components/App/App";
import "./styles/reset.css";
import "./styles/styles.css";

(() => {
  const appRoot = document.querySelector("#app");
  if (appRoot) {
    appRoot.innerHTML = "";
    const app = App();
    appRoot.appendChild(app);
  } else {
    console.error("App root element not found");
  }
})();
