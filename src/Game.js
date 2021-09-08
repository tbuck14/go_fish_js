const cards_per_player = 5
class Game {
  constructor(players, deck = new Deck(), numberOfBots = 1) {
    this._players = players
    this._deck = deck
    this.add_bots(numberOfBots)
  }

  players() {
    return this._players
  }

  deck() {
    return this._deck
  }

  start() {
    this.deal_cards()
  }

  add_bots(numberOfBots) {
    for (let step = 0; step < numberOfBots; step++) {
      this.players().push(new BotPlayer(`bot${this.players().length}`))
    }
  }

  deal_cards() {
    this.deck().build()
    this.players().forEach(player => {
      for (let step = 0; step < cards_per_player; step++) {
        player.addCardsToHand([this.deck().deal()])
      }
    })
  }
}
