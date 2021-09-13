class GameView {
  constructor(game, reDraw = () => {} ) {
    this._game = game
    this._reDraw = reDraw
  }

  game() {
    return this._game
  }

  onSubmit(event) {
    event.preventDefault()
    const playerAsked = event.target.player.value
    const rankAsked = event.target.card.value
    this.game().playTurn(playerAsked, rankAsked)
    if(this.game().over()){
      this.gameOver()
    } else {
      this._reDraw(this)
    }
  }

  gameOver() {
    const container = document.getElementById('main')
    const view = new GameOverView(this.game())
    view.draw(container)
  }

  playerSelect() {
    return document.getElementById('player')
  }

  cardSelect() {
    return document.getElementById('card')
  }

  submitButton() {
    return document.getElementById('submit')
  }

  draw(container) {
    const markup = `
      <h1>Game Page</h1>
      <h3>Players:</h3>
      <ul>
        ${this.game().players().map( player => `<li>${player.name()} (cards: ${player.cardsLeft()})(score: ${player.score()})(hand: ${player.hand().map(card => card.rank())})</li>`).join('')}
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
