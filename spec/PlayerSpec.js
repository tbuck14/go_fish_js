describe('Player', () => {
  it('has a name attribute', () => {
    const player = new Player('player 1')
    expect(player.name()).toEqual('player 1')
  })

  it("has an array or 'hand' of card objects", () => {
    const hand = [new Card('A', 'D'), new Card('3', 'H'),new Card('J', 'C')]
    const player1 = new Player('trevor')
    const player2 = new Player('connor', hand)
    expect(player1.hand()).toEqual([])
    expect(player2.hand()).toEqual(hand)
  })

  describe('#cards_left', () => {
    it('returns the amount of cards left in a the players hand', () => {
      const hand = [new Card('A', 'D'), new Card('3', 'H'),new Card('J', 'C')]
      const player1 = new Player('trevor', hand)
      expect(player1.cards_left()).toEqual(3)
    })
  })

  describe('#addCardsToHand', () => {
    it('adds the passed in cards to the players hand', () => {
      player = new Player('trevor')
      expect(player.hand()).toEqual([])
      player.addCardsToHand([new Card('6','H'),new Card('6','D')])
      expect(player.hand()).toEqual([new Card('6','H'),new Card('6','D')])
    })
  })

  describe('#method_name', () => {
    it('', () => {

    })
  })
})
