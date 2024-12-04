import { Header } from "../Header/Header";
import "./App.css";

export function App(): HTMLDivElement {
  const appContainer = document.createElement("div");
  appContainer.className = "app-container";
  /* APPENDED COMPONENTS TO APP CONTAINER */
  appContainer.appendChild(Header());
  // ...
  return appContainer;
}
