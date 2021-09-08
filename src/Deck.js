class Deck {
  constructor(cards = []) {
    this._cards = cards
  }

  cards() {
    return this._cards
  }

  cards_left() {
    return this.cards().length
  }

  deal() {
    return this.cards().pop()
  }

  shuffle() {
    this.cards().sort(() => Math.random() - 0.5)
  }

  build() {
    // look in Deck.js to find where ranks and suits are defined
    suits.forEach( (suit) => {
      ranks.forEach((rank) => {
        this.cards().push(new Card(rank, suit))
      })
    })
    this.shuffle()
  }
}
