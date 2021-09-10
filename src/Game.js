const cardsPerPlayer = 5
class Game {
  constructor(players, deck = new Deck(), numberOfBots = 3) {
    this._players = players
    this._deck = deck
    this._turnCount = 0
    this.addBots(numberOfBots)
  }
  
  turnCount() {
    return this._turnCount
  }

  players() {
    return this._players
  }

  currentPlayer() {
    return this._players[0]
  }

  turnPlayer() {
    return this.players()[this.turnCount() % this.players().length]
  }

  playTurn(playerAsked, RankAsked) {
    const cardsAwarded = this.findPlayerByName(playerAsked).takeCards(RankAsked)
    if(cardsAwarded.length > 0) {
      this.turnPlayer().addCardsToHand(cardsAwarded)
      this.botMakeGuess()
    }
    else {
      this.playerGoFish(this.turnPlayer())
    }
  }

  nextTurn() {
    this._turnCount += 1
    this.botMakeGuess()
  }

  botMakeGuess() {
    if(this.turnPlayer().bot() == true){
      if(this.turnPlayer().cardsLeft() > 0) {
        const guess = this.turnPlayer().makeGuess(this.players())
        this.playTurn(...guess)
      } else {
        this.playerGoFish(this.turnPlayer())
      }
    }
  }

  playerGoFish(player) {
    player.addCardsToHand(this.deck().deal())
    this.nextTurn()
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
