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
})
