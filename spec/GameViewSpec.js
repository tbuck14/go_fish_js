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
})
