const appContainer: HTMLArticleElement | null =
	document.querySelector(".app-container");
const gridContainer: HTMLSectionElement | null =
	document.querySelector(".grid-container");
const spiral: HTMLDivElement | null = document.querySelector(".spiral");

function getGridItems(): NodeListOf<HTMLDivElement> {
  return document.querySelectorAll(".grid-item");
}

export { appContainer, gridContainer, getGridItems, spiral };
