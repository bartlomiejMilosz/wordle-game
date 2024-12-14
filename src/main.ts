const appContainer: HTMLArticleElement | null = document.querySelector(".app-container");
const gridContainer: HTMLSectionElement | null = document.querySelector(".grid-container");

function initializeApp(): void {
  // Initialize application-related logic here
}

function initializeGridItems(gridCells: number): void {
  Array.from({ length: gridCells }).forEach(() => {
    const gridItem: HTMLDivElement = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.innerText = "";
    gridContainer?.appendChild(gridItem);
  });
}
 
document.addEventListener("DOMContentLoaded", () => {
  initializeGridItems(30); // Initialize grid with 30 cells
  initializeApp();
});
