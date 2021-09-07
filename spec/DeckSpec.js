describe('Deck', () => {
  it('has an array of card objects', () => {
    const cards = [new Card('A', 'S'),new Card('6', 'D'),new Card('2', 'C'),new Card('9', 'H')]
    const deck = new Deck(cards)
    expect(deck.cards).toEqual(cards)
  })
})
