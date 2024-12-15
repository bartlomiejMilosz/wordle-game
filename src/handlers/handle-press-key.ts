import { getGridItems } from "../utils/dom-utils";
import { handleAddLetter } from "./handle-add-letter";
import { handleBackspace } from "./handle-backspace";
import { handleCommit } from "./handle-commit";

function handlePressKey() {
	document.addEventListener("keydown", async (event: KeyboardEvent) => {
		const action: string = event.key;
		const gridItems: NodeListOf<HTMLDivElement> = getGridItems();

		if (!gridItems || gridItems.length === 0) {
			console.error("Grid items not initialized or empty.");
			return;
		}

		switch (true) {
			case action === "Enter":
				await handleCommit();
				break;
			case action === "Backspace":
				handleBackspace(gridItems);
				break;
			case isLetter(action):
				handleAddLetter(action.toUpperCase(), gridItems);
				break;
			default:
				// Do nothing
				break;
		}
	});
}

function isLetter(letter: string): boolean {
	return /^[a-zA-Z]$/.test(letter);
}

export { handlePressKey };
