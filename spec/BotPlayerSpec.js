describe('Deck', () => {
  describe('#makeGuess', () => {
    it('returns an array holding a player name and rank', () => {
      const bot = new BotPlayer('bot1',[new Card('A','H')])
      const players = [new Player('fred'),new Player('bud'),new Player('dude'),new Player('bob'), bot]
      expect(bot.makeGuess(players)).toEqual(['fred','A'])
    })
  })
})
