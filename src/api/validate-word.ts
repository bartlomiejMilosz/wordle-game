import { API_URLS } from "./api-urls";

interface ValidationResponse {
	word: string;
	validWord: boolean;
}

async function fetchWordValidation(
	wordToValidate: string,
): Promise<ValidationResponse> {
	try {
		const response: Response = await fetch(API_URLS.VALIDATE_WORD, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ word: wordToValidate }),
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}

		const processedResponse: ValidationResponse = await response.json();
		return processedResponse;
	} catch (error) {
		console.error("An error occurred while fetching the word:", error);
		throw error;
	}
}

async function validateWord(wordToValidate: string): Promise<boolean> {
	try {
		const response: ValidationResponse =
			await fetchWordValidation(wordToValidate);
		return response.validWord;
	} catch (error) {
		console.error(`Failed to validate word: ${error}`);
		return false;
	}
}

export { validateWord };
