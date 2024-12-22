import { gameState } from "../app-state";

function handleAddLetter(
	letter: string,
	gridItems: NodeListOf<HTMLDivElement>,
): void {
	const currentGuess: string = gameState.currentGuess;
	if (currentGuess.length < gameState.ANSWER_LENGTH) {
		gameState.currentGuess = currentGuess + letter;
	} else {
		gameState.currentGuess =
			currentGuess.substring(0, currentGuess.length - 1) + letter;
	}

	const currentIndex: number =
		gameState.ANSWER_LENGTH * gameState.currentRow +
		gameState.currentGuess.length -
		1;
	if (currentIndex < gridItems.length) {
		gridItems[currentIndex].innerText = letter;
	} else {
		console.error("Index out of bounds for grid items");
	}
}

export { handleAddLetter };
