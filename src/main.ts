import { App } from "./components/App/App";
import "./styles/reset.css";
import "./styles/styles.css";

function initializeApp(): void {
	const appRoot = document.querySelector("#app");
	if (!appRoot) {
		console.error(
			"App root element not found. Ensure there is an element with id='app' in your index.html.",
		);
		return;
	}

	try {
		appRoot.innerHTML = ""; // Clear any existing content
		const app = App();
		appRoot.appendChild(app);
	} catch (error) {
		console.error("Error initializing the app:", error);
		appRoot.innerHTML = "<p>Something went wrong. Please try again later.</p>"; // Fallback UI
	}
}

document.addEventListener("DOMContentLoaded", () => {
	initializeApp();
});
