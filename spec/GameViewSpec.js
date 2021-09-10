describe('GameView', () => {
  it('displays a list of players in the game', () => {
    const players = [new Player('Trevor'), new Player('Connor')]
    const game = new Game(players)
    const view = new GameView(game)
    const container = document.createElement('div')
    document.body.appendChild(container)
    view.draw(container)

    expect(document.body.innerHTML).toContain('Trevor')
    expect(document.body.innerHTML).toContain('Connor')
    container.remove()
  })

  it('displays a list cards representing your hand', () => {
    const players = [new Player('Trevor',[new Card('A','C'),new Card('2','D'),new Card('J','D'),new Card('8','S'),new Card('Q','H'),]), new Player('Connor')]
    const game = new Game(players)
    const view = new GameView(game)
    const container = document.createElement('div')
    document.body.appendChild(container)
    view.draw(container)

    expect(document.body.innerHTML).toContain('A')
    expect(document.body.innerHTML).toContain('2')
    expect(document.body.innerHTML).toContain('J')
    expect(document.body.innerHTML).toContain('8')
    expect(document.body.innerHTML).toContain('Q')
    container.remove()
  })

  describe('showing the turn form', () => {
    
  })

  describe('#onLoad', () => {
    it('calls playTurn() and re-renders the form', () => {
      const player1 = new Player('Trevor',[new Card('A','H')])
      const player2 = new Player('Connor',[new Card('A','S')])
      const players = [player1, player2]
      let testview = ''
      const updateGameView = () => { testview = 'refreshed view!'}
      const game = new Game(players)
      const view = new GameView(game, updateGameView)
      const container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)
      view.submitButton().click()

      //executes the playTurn() method
      expect(player2.cardsLeft()).toEqual(0)
      expect(player1.cardsLeft()).toEqual(2)

      //calls the passed in function for re-drawing the view
      expect(testview).toEqual('refreshed view!')

      container.remove()
    })
  })
})
