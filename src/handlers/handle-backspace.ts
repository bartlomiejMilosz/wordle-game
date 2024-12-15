import { gameState } from "../app-state";

function handleBackspace(gridItems: NodeListOf<HTMLDivElement>) {
	if (gameState.currentGuess.length === 0) {
		console.error("Cannot backspace an empty guess.");
		return;
	}

	const currentIndex: number = (gameState.ANSWER_LENGTH * gameState.currentRow) + gameState.currentGuess.length - 1;
	if (currentIndex >= gridItems.length) {
		console.error(`Index ${currentIndex} is out of bounds for grid items.`);
		return;
	}

	gameState.currentGuess = gameState.currentGuess.slice(0, -1);
	gridItems[currentIndex].innerText = "";
}

export { handleBackspace };
