describe('Game', () => {
  it('has an array of player objects', () => {
    const players = [new Player('Trevor'), new Player('Connor')]
    const game = new Game(players)
    expect(game.players()).toEqual(players)
  })

  it('has an array of card objects', () => {
    const players = []
    const deck = [new Card('A', 'S'),new Card('6', 'D'),new Card('2', 'C'),new Card('9', 'H')]
    const game = new Game(players, deck)
    expect(game.deck()).toEqual(deck)
  })

  describe('#add_bots', () => {
    it('adds bots to the game based on a value passed in', () => {
      const game = new Game([new Player('random')],[],3)
      expect(game.players().length).toEqual(4)
    })
  })

  describe('#deal_cards', () => {
    it('deals each player 5 cards', () => {
      player1 = new Player('trevor')
      const game = new Game([player1])
      game.deal_cards()
      game.players().forEach( player => expect(player.cards_left()).toEqual(5))
    })
  })

  describe('#method_name', () => {
    it('', () => {

    })
  })
})
