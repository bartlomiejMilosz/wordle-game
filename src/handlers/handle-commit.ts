import { validateWord } from "../api/validate-word";
import { gameState } from "../app-state";
import { getGridItems, spiral } from "../utils/dom-utils";

async function handleCommit() {
	if (gameState.currentGuess.length !== gameState.ANSWER_LENGTH) {
		// Do nothing
		return;
	}

	setLoading(false);
	try {
		const isValid = await validateWord(gameState.currentGuess);
		if (isValid) {
			const gridItems: HTMLDivElement[] = Array.from(getGridItems());
			const startIndex: number = gameState.currentRow * 5;
			const endIndex: number = startIndex + 5;
			const rowItems: HTMLDivElement[] = gridItems.slice(startIndex, endIndex);

			// Change background color to green for valid row
			rowItems.forEach((item) => {
				item.style.backgroundColor = "green";
			});
		} else {
			console.error("Invalid word");
		}
	} catch (error) {
		console.error("Error during fetch or validation:", error);
	} finally {
		// Hide the spinner after the fetch is complete or if an error occurs
		setLoading(true);
	}

	gameState.stepToTheNextRow();
}

function setLoading(isLoading: boolean): void {
	if (spiral) {
		spiral.classList.toggle("hidden", isLoading);
	}
}

export { handleCommit };
