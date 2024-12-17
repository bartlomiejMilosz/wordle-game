import { getWordOfTheDay } from "../api/fetch-word";
import { validateWord } from "../api/validate-word";
import { gameState } from "../app-state";
import { getGridItems } from "../utils/dom-utils";

async function handleCommit() {
	if (gameState.currentGuess.length !== gameState.ANSWER_LENGTH) {
		// Do nothing
		return;
	}

	setLoading(true);
	try {
		const isValid: boolean = await validateWord(gameState.currentGuess);
    const wordOfTheDay: string = await getWordOfTheDay();
		if (isValid && gameState.currentGuess === wordOfTheDay.toUpperCase()) {
			const gridItems: HTMLDivElement[] = Array.from(getGridItems());
			const startIndex: number = gameState.currentRow * 5;
			const endIndex: number = startIndex + 5;
			const rowItems: HTMLDivElement[] = gridItems.slice(startIndex, endIndex);
			rowItems.forEach((item) => {
				item.style.backgroundColor = "green";
			});
		} else {
			console.error("Invalid word");
		}
	} catch (error) {
		console.error("Error during fetch or validation:", error);
	} finally {
		setLoading(false); // Hide the loader and restore middle cell value after the fetch is complete or if an error occurs
	}
	gameState.stepToTheNextRow();
}

function setLoading(isLoading: boolean): void {
	const gridItems: HTMLDivElement[] = Array.from(getGridItems());
	const startIndex: number = gameState.currentRow * 5;
	const endIndex: number = startIndex + 5;
	const rowItems: HTMLDivElement[] = gridItems.slice(startIndex, endIndex);
	const middleIndex: number = 2;
	const middleItem: HTMLDivElement = rowItems[middleIndex];
	if (isLoading) {
		if (!gameState.middleCellLetter) {
			gameState.middleCellLetter = middleItem.innerText;
		}
		rowItems.forEach((item) => item.classList.add("gray-out"));
		middleItem.innerHTML = `<span class="loader">🌀</span>`;
	} else {
		middleItem.innerText = gameState.middleCellLetter;
		rowItems.forEach((item) => item.classList.remove("gray-out"));
	}
}

export { handleCommit };
