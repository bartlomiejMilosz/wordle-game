interface GameState {
  currentGuess: string;
}

const gameState: GameState = {
  currentGuess: "",
};

function getCurrentGuess(): string {
  return gameState.currentGuess;
}

function updateCurrentGuess(newGuess: string): void {
  gameState.currentGuess = newGuess;
}

export { gameState, getCurrentGuess, updateCurrentGuess };
