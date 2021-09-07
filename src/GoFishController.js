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
    const view = new GameView(game)
    view.draw(this.container())
  }
}

window.controller = new GoFishController();
window.onload = controller.login.bind(window.controller)
