import { getWordOfTheDay } from "../api/fetch-word";
import { validateWord } from "../api/validate-word";
import { gameState } from "../app-state";
import { getCurrentRowItems } from "../utils/dom-utils";
import { setLoading } from "../utils/loader";

async function handleCommit() {
	if (isCurrentGuessComplete()) {
		// Do nothing
		return;
	}

	// TODO mark word as "correct", "close", "wrong"
	// TODO you win alert

	setLoading(true);
	try {
		const [isValid, wordOfTheDay]: [boolean, string] = await Promise.all([
			validateWord(gameState.currentGuess),
			getWordOfTheDay(),
		]);
		if (isValid) {
			handleWordValidation(wordOfTheDay);
		} else {
			console.error("Invalid word. Try again.");
		}
	} catch (error) {
		console.error("Error during fetch or validation:", error);
	} finally {
		setLoading(false); // Hide the loader and restore middle cell value after the fetch is complete or if an error occurs
		gameState.stepToTheNextRow();
	}
}

function handleWordValidation(wordOfTheDay: string): void {
	const currentRowItems: HTMLDivElement[] = getCurrentRowItems();
	if (gameState.currentGuess === wordOfTheDay) {
		currentRowItems.forEach((item) => item.classList.add("green"));
	} else {
		console.error("The guess does not match the word of the day.");
	}
}

function isCurrentGuessComplete(): boolean {
	return gameState.currentGuess.length !== gameState.ANSWER_LENGTH;
}

export { handleCommit };
