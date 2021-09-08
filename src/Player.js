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

  cards_left() {
    return this.hand().length
  }

  addCardsToHand(cards_to_add) {
    this._hand = this.hand().concat(cards_to_add)
  }
}
