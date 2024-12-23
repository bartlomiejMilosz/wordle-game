import { getWordOfTheDay } from "../api/fetch-word";
import { validateWord } from "../api/validate-word";
import { gameState } from "../app-state";
import { getCurrentRowItems, getGridItems } from "../utils/dom-utils";
import { setLoading } from "../utils/loader";

async function handleCommit() {
	if (isCurrentGuessComplete()) {
		// Do nothing
		return;
	}

	setLoading(true);

	let isWordValid: boolean = false;
	let isCorrectGuess: boolean = false;
	let isGameEnd: boolean = false;
	try {
		const [validationResult, wordOfTheDay]: [boolean, string] =
			await Promise.all([
				validateWord(gameState.currentGuess),
				getWordOfTheDay(),
			]);

		isWordValid = validationResult;

		if (isWordValid) {
			isCorrectGuess = handleValidatedWord(wordOfTheDay);
			if (isCorrectGuess) {
				alert("You win!");
				isGameEnd = true;
			} else if (gameState.currentRow === gameState.ROUNDS) {
				alert(`You lose, the word was ${wordOfTheDay}`);
				isGameEnd = true;
			}
		} else {
			console.error("Invalid word. Try again.");
			clearCurrentRow();
			gameState.currentGuess = "";
		}
	} catch (error) {
		console.error("Error during fetch or validation:", error);
	} finally {
		setLoading(false);
		if (isGameEnd) {
			resetGame();
		} else if (isWordValid && !isGameEnd) {
			gameState.stepToTheNextRow();
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
			item.classList.remove(
				"guess-letter-green",
				"guess-letter-yellow",
				"guess-letter-gray",
			);
		});
	}, 500);
}

function handleValidatedWord(wordOfTheDay: string): boolean {
	const currentRowItems: HTMLDivElement[] = getCurrentRowItems();
	let isAllLettersMatchCorrectAnswer = true;

	for (let i = 0; i < gameState.currentGuess.length; i++) {
		const guessedLetter = gameState.currentGuess[i];
		const wordLetter = wordOfTheDay[i];
		const gridItem = currentRowItems[i];
		if (guessedLetter === wordLetter) {
			gridItem.classList.add("guess-letter-green");
		} else if (wordOfTheDay.includes(guessedLetter)) {
			gridItem.classList.add("guess-letter-yellow");
			isAllLettersMatchCorrectAnswer = false;
		} else {
			gridItem.classList.add("guess-letter-gray");
			isAllLettersMatchCorrectAnswer = false;
		}
	}

	return isAllLettersMatchCorrectAnswer;
}

function resetGame(): void {
	gameState.currentGuess = "";
	gameState.middleCellLetter = "";
	gameState.currentRow = 0;

	const currentRowItems = getGridItems();
	currentRowItems.forEach((item) => {
		item.innerText = "";
		item.classList.remove(
			"guess-letter-green",
			"guess-letter-yellow",
			"guess-letter-gray",
			"blink-red",
		);
	});
}

function isCurrentGuessComplete(): boolean {
	return gameState.currentGuess.length !== gameState.ANSWER_LENGTH;
}

export { handleCommit };
