class LoginView {
  constructor(onLogin) {
    this.onLogin = onLogin
  }

  onSubmit(event) {
    event.preventDefault()
    debugger
    this.onLogin(event.target.name.value)
  }

  nameInput() {
    return document.getElementById('name')
  }

  submitButton() {
    return document.getElementById('submit')
  }

  draw(container) {
    const formMarkup = `
      <form>
        <label for="name">Name</label>
        <input id="name" type="text">
        <input id="submit" type="submit">
      </form>
    `
    const element = document.createElement('div')
    element.innerHTML = formMarkup
    element.onsubmit = this.onSubmit.bind(this)
    container.appendChild(element)
  }
}
