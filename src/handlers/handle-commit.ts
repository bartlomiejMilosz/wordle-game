import { gameState } from "../app-state";

async function handleCommit() {
	if (gameState.currentGuess.length !== gameState.ANSWER_LENGTH) {
		// Do nothing
		return;
	}

  gameState.stepToTheNextRow();
}

export { handleCommit };
