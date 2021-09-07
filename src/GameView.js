class GameView {
  constructor(game) {
    this._game = game
  }

  game() {
    return this._game
  }

  draw(container) {
    let listOfPlayers = ''
    this.game().players.forEach( player => listOfPlayers += `<li>${player.name}</li>`)
    const markup = `
      <h1>Game Page</h1>
      <h3>Players:</h3>
      <ul>
        ${listOfPlayers}
      </ul>
    `
    const element = document.createElement('div')
    element.innerHTML = markup
    container.appendChild(element)
  }
}
