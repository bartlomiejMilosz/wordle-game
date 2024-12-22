import { gameState } from "../app-state";
import { getCurrentRowItems } from "./dom-utils";

function setLoading(isLoading: boolean): void {
	const currentRowItems: HTMLDivElement[] = getCurrentRowItems();
	const middleItem: HTMLDivElement = getMiddleCell(currentRowItems);
	const LOADER_ICON: string = "🌀";

	if (isLoading) {
		storeMiddleCellValue(middleItem);
		styleRow(currentRowItems, "gray-out");
		showSpinnerInCell(middleItem, LOADER_ICON);
	} else {
		restoreMiddleCellValue(middleItem);
		resetRowStyles(currentRowItems, "gray-out");
	}
}

function styleRow(rowItems: HTMLDivElement[], styleClass: string): void {
	rowItems.forEach((item) => item.classList.add(styleClass));
}

function getMiddleCell(rowItems: HTMLDivElement[]): HTMLDivElement {
	const middleIndex = Math.floor(gameState.ANSWER_LENGTH / 2);
	return rowItems[middleIndex];
}

function storeMiddleCellValue(cell: HTMLDivElement): void {
	if (!gameState.middleCellLetter) {
		gameState.middleCellLetter = cell.innerText;
	}
}

export function restoreMiddleCellValue(cell: HTMLDivElement): void {
	cell.innerText = gameState.middleCellLetter;
}

function resetRowStyles(rowItems: HTMLDivElement[], styleClass: string): void {
	rowItems.forEach((item) => item.classList.remove(styleClass));
}

function showSpinnerInCell(cell: HTMLDivElement, loaderIcon: string): void {
	cell.innerHTML = `<span class="loader">${loaderIcon}</span>`;
}

export { setLoading };
