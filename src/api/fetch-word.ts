import { API_URLS } from "./api-urls";

interface WordOfTheDayResponse {
	word: string;
	puzzleNumber: number;
}

async function fetchWordOfTheDayData(
	random: boolean = false,
): Promise<WordOfTheDayResponse> {
	const url: string = random
		? `${API_URLS.FETCH_WORD_OF_THE_DAY}?random=1`
		: API_URLS.FETCH_WORD_OF_THE_DAY;

	try {
		const response: Response = await fetch(url, {
			method: "GET",
		});

		if (!response.ok) {
			throw new Error(
				`Failed to fetch word of the day: ${response.status} ${response.statusText}`,
			);
		}

		const data: WordOfTheDayResponse = await response.json();
		return data;
	} catch (error) {
		console.error(
			"An error occurred while fetching the word of the day:",
			error,
		);
		throw error;
	}
}

async function getWordOfTheDay(random: boolean = false): Promise<string> {
	try {
		const response: WordOfTheDayResponse = await fetchWordOfTheDayData(random);
		return response.word;
	} catch (error) {
		console.error(`Failed to get word of the day: ${error}`);
		throw error;
	}
}

export { getWordOfTheDay };
