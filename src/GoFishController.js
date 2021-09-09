class GoFishController {
  container() {
    return document.getElementById('main')
  }

  login() {
    const view = new LoginView(this.startGame.bind(this))
    view.draw(this.container())
  }

  startGame(name) {
    const player = new Player(name)
    const game = new Game([player])
    game.start()
    const view = new GameView(game)
    view.draw(this.container())
  }

  // play_round(game, rank_asked, player_asked) {
  //   game.players().forEach((player) => {
  //     if(player === game.currentPlayer()){
  //       // take_turn(rank_asked, player_asked, asking_player)
  //       game.take_turn(rank_asked, player_asked, game.currentPlayer())
  //     }
  //     else {
  //       //get_guess returns something like ['A', player_asked]
  //       game.take_turn(...player.get_guess(), player)
  //     }
  //   })
  // }
}

window.controller = new GoFishController();
window.onload = controller.login.bind(window.controller)
