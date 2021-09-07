describe('Game', () => {
  it('has an array of player objects', () => {
    const players = [new Player('Trevor'), new Player('Connor')]
    const game = new Game(players)
    expect(game.players).toEqual(players)
  })
})
