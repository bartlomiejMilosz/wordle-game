import { getGridItems } from "../utils/dom-utils";
import { handleAddLetter } from "./handle-add-letter";
import { handleBackspace } from "./handle-backspace";
import { handleCommit } from "./handle-commit";

function handlePressKey() {
	document.addEventListener("keydown", (event: KeyboardEvent) => {
		const action = event.key;
		switch (true) {
			case action === "Enter":
				handleCommit();
				break;
			case action === "Backspace":
				handleBackspace();
				break;
			case isLetter(action): {
				const gridItems: NodeListOf<HTMLDivElement> = getGridItems();
				handleAddLetter(action.toUpperCase(), gridItems);
				break;
			}
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
