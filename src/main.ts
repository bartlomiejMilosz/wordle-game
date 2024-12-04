import { App } from "./components/App/App";
import { appendCSSLinks, STYLES_PATHS } from "./utils/append-styles";

(() => {
	const appRoot: HTMLDivElement | null = document.querySelector("#app");
	if (appRoot) {
		appendCSSLinks(STYLES_PATHS);
		appRoot.innerHTML = "";
		appRoot.appendChild(App());
	} else {
		console.error("App root element not found");
	}
})();
