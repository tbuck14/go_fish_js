class Deck {
  constructor(cards = []) {
    this._cards = cards
  }

  cards() {
    return this._cards
  }

  cardsLeft() {
    return this.cards().length
  }

  deal() {
    let card = [this.cards().pop()]
    if(card[0] == undefined){
      card = []
    }
    return card
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
