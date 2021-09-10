class BotPlayer extends Player {
  makeGuess(players) {
    const askablePlayers = players.filter(player => player != this)
    return [askablePlayers[0].name(), this.hand()[0].rank()]
  }

  bot() {
    return true
  }
}
