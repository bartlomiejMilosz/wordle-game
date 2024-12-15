class GameState {
  private _currentGuess: string = "";

  get currentGuess(): string {
    return this._currentGuess;
  }

  set currentGuess(newGuess: string) {
    this._currentGuess = newGuess;
  }
}

const gameState: GameState = new GameState();

export { gameState };
