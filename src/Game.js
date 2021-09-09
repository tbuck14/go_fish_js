const cardsPerPlayer = 5
class Game {
  constructor(players, deck = new Deck(), numberOfBots = 3) {
    this._players = players
    this._deck = deck
    this.addBots(numberOfBots)
  }

  players() {
    return this._players
  }

  currentPlayer() {
    return this._players[0]
  }

  playRound(playerAsked, RankAsked) {
    this.playerTakeTurn(this.currentPlayer(), playerAsked, RankAsked)
    this.players().forEach( (player) => {
      if(player != this.currentPlayer()) {
        const guess = player.makeGuess(this.players())
        this.playerTakeTurn(player, ...guess)
      }
    })
  }

  playerTakeTurn(player, playerAsked, RankAsked) {
    const cardsAwarded = this.findPlayerByName(playerAsked).takeCards(RankAsked)
    if(cardsAwarded.length > 0) {
      player.addCardsToHand(cardsAwarded)
    }
    else {
      this.playerGoFish(player)
    }
  }

  playerGoFish(player) {
    player.addCardsToHand(this.deck().deal())
  }

  findPlayerByName(name) {
    return this.players().find(player => player.name() == name)
  }

  deck() {
    return this._deck
  }

  start() {
    this.dealCards()
  }

  addBots(numberOfBots) {
    Array.from(Array(numberOfBots)).forEach(() => {
      this.players().push(new BotPlayer(`bot${this.players().length}`))
    })
  }

  dealCards() {
    this.deck().build()
    this.players().forEach(player => {
      Array.from(Array(cardsPerPlayer)).forEach(() => {
        player.addCardsToHand(this.deck().deal())
      })
    })
  }
}
