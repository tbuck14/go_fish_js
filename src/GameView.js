class GameView {
  constructor(game) {
    this._game = game
  }

  game() {
    return this._game
  }

  container() {
    return document.getElementById('main')
  }

  onSubmit(event) {
    event.preventDefault()
    const playerAsked = event.target.player.value
    const rankAsked = event.target.card.value
    this.game().playRound(playerAsked, rankAsked)
    this.draw(this.container())
  }

  draw(container) {
    const markup = `
      <h1>Game Page</h1>
      <h3>Players:</h3>
      <ul>
        ${this.game().players().map( player => `<li>${player.name()} (cards: ${player.cardsLeft()})</li>`).join('')}
      </ul>
      <div id="cards"></div>
      <div id="turn-selection"></div>
      <div id="round-results"></div>
    `
    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)

    this.drawCards()
    this.drawTurnForm()

    return element
  }

  drawCards() {
    const cards = this.game().currentPlayer().hand()
    const player = this.game().currentPlayer()
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

  drawTurnForm() {
    const cards = this.game().currentPlayer().hand()
    const players = this.game().players().filter((player) => player != this.game().currentPlayer())
    const markup = `
      <form>
        <select name="player" id="player">
          ${players.map( (player) => `<option value="${player.name()}">${ player.name() }</option>` ).join('')}
        </select>
        <select name="card" id="card">
          ${cards.map((card) => `<option value="${card.rank()}">${card.rank()}</option>`).join('')}
        </select>
        <input id="submit" type="submit">
      </form>
    `
    const container = document.getElementById('turn-selection')
    const element = document.createElement('div')
    element.innerHTML = markup
    element.onsubmit = this.onSubmit.bind(this)
    container.innerHTML = ''
    container.appendChild(element)

    return element
  }
}
