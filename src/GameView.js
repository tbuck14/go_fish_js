class GameView {
  constructor(game) {
    this._game = game
  }

  game() {
    return this._game
  }

  draw(container) {
    const markup = `
      <h1>Game Page</h1>
      <h3>Players:</h3>
      <ul>
        ${this.game().players().map( player => `<li>${player.name()} (cards: ${player.cards_left()})</li>`).join('')}
      </ul>
      <div id="cards"></div>
    `

    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)

    this.drawCards()

    return element
  }

  drawCards() {
    const cards = this.game().players()[0].hand()
    const player = this.game().players()[0]
    const markup = `
      <h3>Your Hand:</h3>
      <ul>
        ${cards.map((card) => `<li>${card.rank()}</li>`).join('')}
      </ul>
    `
    const container = document.getElementById('cards')
    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)

    return element
  }
}
