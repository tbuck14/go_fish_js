describe('Player', () => {
  it('has a name attribute', () => {
    const player = new Player('player 1')
    expect(player.name).toEqual('player 1')
  })

  it("has an array or 'hand' of card objects", () => {
    const hand = [new Card('A', 'D'), new Card('3', 'H'),new Card('J', 'C')]
    const player1 = new Player('trevor')
    const player2 = new Player('connor', hand)
    expect(player1.hand).toEqual([])
    expect(player2.hand).toEqual(hand)
  })
  
})
