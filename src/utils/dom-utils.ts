const appContainer: HTMLArticleElement | null =
	document.querySelector(".app-container");
const gridContainer: HTMLSectionElement | null =
	document.querySelector(".grid-container");
const loader: HTMLDivElement | null = document.querySelector(".loader");

function getGridItems(): NodeListOf<HTMLDivElement> {
  return document.querySelectorAll(".grid-item");
}

export { appContainer, gridContainer, getGridItems, loader };
