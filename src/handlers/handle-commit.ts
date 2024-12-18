import { getWordOfTheDay } from "../api/fetch-word";
import { validateWord } from "../api/validate-word";
import { gameState } from "../app-state";
import { getCurrentRowItems } from "../utils/dom-utils";
import { setLoading } from "../utils/loader";

async function handleCommit() {
	if (isCurrentGuessComplete()) {
		// Do nothing
	}

	setLoading(true);

	let isValid = false;
	try {
		const [validationResult, wordOfTheDay]: [boolean, string] =
			await Promise.all([
				validateWord(gameState.currentGuess),
				getWordOfTheDay(),
			]);

		isValid = validationResult;
		if (isValid) {
			handleValidatedWord(wordOfTheDay);
		} else {
			console.error("Invalid word. Try again.");
			clearCurrentRow();
	    gameState.currentGuess = "";
		}
	} catch (error) {
		console.error("Error during fetch or validation:", error);
	} finally {
		setLoading(false);
		if (isValid) {
			gameState.stepToTheNextRow(); // Move to the next row only if the word was valid
		}
		gameState.middleCellLetter = "";
	}
}

function clearCurrentRow(): void {
	const currentRowItems: HTMLDivElement[] = getCurrentRowItems();
	currentRowItems.forEach((item) => {
		item.classList.add("blink-red");
	});

	setTimeout(() => {
		currentRowItems.forEach((item) => {
			item.classList.remove("blink-red");
			item.innerText = "";
			item.classList.remove("green", "yellow", "gray");
		});
	}, 500);
}

function handleValidatedWord(wordOfTheDay: string): void {
	const currentRowItems: HTMLDivElement[] = getCurrentRowItems();
	for (let i = 0; i < gameState.currentGuess.length; i++) {
		const guessedLetter = gameState.currentGuess[i];
		const wordLetter = wordOfTheDay[i];
		const gridItem = currentRowItems[i];

		if (guessedLetter === wordLetter) {
			gridItem.classList.add("green");
		} else if (wordOfTheDay.includes(guessedLetter)) {
			gridItem.classList.add("yellow");
		} else {
			gridItem.classList.add("gray");
		}
	}
}

function isCurrentGuessComplete(): boolean {
	return gameState.currentGuess.length !== gameState.ANSWER_LENGTH;
}

export { handleCommit };
