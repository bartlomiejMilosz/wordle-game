// const API_URL: string = "https://words.dev-apis.com/validate-word";
// const WORD_TO_VALIDATE = "intent";

interface ValidateWordResponse {
	valid: boolean;
	message: string;
}

export default async function fetchWord(
	url: string,
	word: string,
): Promise<ValidateWordResponse> {
	try {
		const response: Response = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ word }),
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}

		const processedResponse = await response.json();
		return processedResponse;
	} catch (error) {
		console.error("An error occurred while fetching the word:", error);
		throw error;
	}
}
