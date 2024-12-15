import { gameState } from "../app-state";

const ANSWER_LENGTH: number = 5; // number depends on game logic

function handleAddLetter(
	letter: string,
	gridItems: NodeListOf<HTMLDivElement>,
): void {
	const currentGuess = gameState.currentGuess;
	if (currentGuess.length < ANSWER_LENGTH) {
		gameState.currentGuess = currentGuess + letter;
	} else {
		gameState.currentGuess =
			currentGuess.substring(0, currentGuess.length - 1) + letter;
	}

	const currentIndex: number = gameState.currentGuess.length - 1;
	if (currentIndex < gridItems.length) {
		gridItems[currentIndex].innerText = letter;
	} else {
		console.error("Index out of bounds for grid items");
	}
}

export { handleAddLetter };
