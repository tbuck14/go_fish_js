class Player {
  constructor (name, hand = []) {
    this._name = name
    this._hand = hand
  }

  name() {
    return this._name
  }

  hand() {
    return this._hand
  }

  cardsLeft() {
    return this.hand().length
  }

  addCardsToHand(cards_to_add) {
    this._hand = this.hand().concat(cards_to_add)
  }

  takeCards(rank) {
    const cardsToReturn = this.hand().filter((card) => card.rank() == rank)
    this._hand = this.hand().filter((card) => card.rank() != rank)
    return cardsToReturn
  }
}
