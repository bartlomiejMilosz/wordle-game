class GameState {
	private _currentGuess: string = "";
  private _currentRow: number = 0;
  private _middleCellLetter: string = ""; // Stores the original letter of the middle cell
	public readonly ANSWER_LENGTH: number = 5; // Immutable constant per instance - number depends on game logic
  public readonly ROUNDS: number = 5; // Counting from 0 -> 6 attemps

	get currentGuess(): string {
    return this._currentGuess;
  }

  set currentGuess(newGuess: string) {
    this._currentGuess = newGuess;
  }

  get currentRow(): number {
    return this._currentRow;
  }

  set currentRow(row: number) {
    this._currentRow = row;
  }

  get middleCellLetter(): string {
		return this._middleCellLetter;
	}

	set middleCellLetter(letter: string) {
		this._middleCellLetter = letter;
	}

  public stepToTheNextRow(): void {
    if (this._currentGuess.length === this.ANSWER_LENGTH) {
      this._currentRow++;
      this._currentGuess = ""; // Clear the guess after moving to the next row
      this._middleCellLetter = ""; // Reset the middle cell letter for the new row
    } 
  }
}

const gameState: GameState = new GameState();

export { gameState };
