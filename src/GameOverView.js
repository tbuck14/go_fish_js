class GameOverView {
  constructor(game) {
    this._game = game
  }

  game() {
    return this._game
  }

  draw(container) {
    const gameOverMarkup = `
      <h1>Game Over</h1>
      <h2>Winner:</h2>
      <ul>
        ${this.game().winners().map( (player) => `<li>${player.name()}, Score: ${player.score()}</li>`).join('')}
      </ul>
      <a href="index.html">Play Again</a>
    `
    const element = document.createElement('div')
    element.innerHTML = gameOverMarkup
    container.innerHTML = ''
    container.appendChild(element)
    return element
  }
}
