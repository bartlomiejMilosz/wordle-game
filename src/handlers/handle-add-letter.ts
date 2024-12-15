const ANSWER_LENGTH: number = 5; // number depends on game logic

interface GameState {
	currentGuess: string;
}

const gameState: GameState = {
	currentGuess: "",
};

function getCurrentGuess(): string {
	return gameState.currentGuess;
}

function handleAddLetter(letter: string, gridItems: NodeListOf<HTMLDivElement>): void {
	if (!gridItems || gridItems.length === 0) {
    console.error("Grid items not initialized");
    return;
  }

	if (gameState.currentGuess.length < ANSWER_LENGTH) {
		gameState.currentGuess += letter;
	} else {
		gameState.currentGuess =
			gameState.currentGuess.substring(0, gameState.currentGuess.length - 1) +
			letter;
	}

	const currentIndex = gameState.currentGuess.length - 1;
  if (currentIndex < gridItems.length) {
    gridItems[currentIndex].innerText = letter;
  } else {
    console.error("Index out of bounds for grid items");
  }
}

export { handleAddLetter, getCurrentGuess };
