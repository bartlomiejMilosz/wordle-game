import { handlePressKey } from "./handlers/handle-press-key";
import { gridContainer } from "./utils/dom-utils";

function initializeGridItems(gridCells: number): void {
	if (gridContainer) {
		gridContainer.innerHTML = "";
	}
	Array.from({ length: gridCells }).forEach(() => {
		const gridItem: HTMLDivElement = document.createElement("div");
		gridItem.classList.add("grid-item");
		gridItem.innerText = "";
		gridContainer?.appendChild(gridItem);
	});
}

function initializeApp(): void {
	handlePressKey();
}

document.addEventListener("DOMContentLoaded", () => {
	initializeGridItems(30); // Initialize grid with 30 cells - game standard
	initializeApp();
});
