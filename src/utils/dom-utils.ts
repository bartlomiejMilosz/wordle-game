import { gameState } from "../app-state";

const appContainer: HTMLArticleElement | null =
	document.querySelector(".app-container");
const gridContainer: HTMLSectionElement | null =
	document.querySelector(".grid-container");
const loader: HTMLDivElement | null = document.querySelector(".loader");

function getGridItems(): NodeListOf<HTMLDivElement> {
  return document.querySelectorAll(".grid-item");
}

function getCurrentRowItems(): HTMLDivElement[] {
	const gridItems: HTMLDivElement[] = Array.from(getGridItems());
	const startIndex: number = gameState.currentRow * 5;
	const endIndex: number = startIndex + 5;
	return gridItems.slice(startIndex, endIndex);
}

export { appContainer, gridContainer, getGridItems, loader, getCurrentRowItems };
