class GameState {
	private _currentGuess: string = "";
  private _currentRow: number = 0;
	public readonly ANSWER_LENGTH: number = 5; // Immutable constant per instance - number depends on game logic

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

  public stepToTheNextRow(): void {
    if (this._currentGuess.length === this.ANSWER_LENGTH) {
      this._currentRow++;
      this._currentGuess = ""; // Clear the guess after moving to the next row
    } 
  }
}

const gameState: GameState = new GameState();

export { gameState };
