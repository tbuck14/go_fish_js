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

  describe('#addBots', () => {
    it('adds bots to the game based on a value passed in', () => {
      const game = new Game([new Player('random')],[],3)
      expect(game.players().length).toEqual(4)
    })
  })

  describe('#dealCards', () => {
    it('deals each player 5 cards', () => {
      player1 = new Player('trevor')
      const game = new Game([player1])
      game.dealCards()
      game.players().forEach( player => expect(player.cardsLeft()).toEqual(5))
    })
  })

  describe('#findPlayerByName', () => {
    it('finds player by name', () => {
      const player1 = new Player('Luna')
      const players = [new Player('Trevor'), new Player('Connor'), new Player('Jaden'), player1]
      const game = new Game(players)

      expect(game.findPlayerByName('Luna')).toEqual(player1)
    })
  })

  describe('#playerGoFish', () => {
    it('removes a card from the deck and adds it to a players hand', () => {
      const player = new Player('trevor')
      const game = new Game([player])
      game.start()
      expect(player.cardsLeft()).toEqual(5)
      game.playerGoFish(player)
      expect(player.cardsLeft()).toEqual(6)
    })
  })

  describe('#method_name', () => {
    it('', () => {

    })
  })
})
