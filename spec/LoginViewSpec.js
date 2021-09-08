describe('LoginView', () => {
  describe('form submit', () => {
    it('draws a form and calls passed in function with the name inputed in the form', () => {
      let calledWith
      const onLogin = (name) => { calledWith = name }
      const view = new LoginView(onLogin)
      const container = document.createElement('div')
      const name = 'Bob Cratchit'
      document.body.appendChild(container)
      view.draw(container)
      view.nameInput().value = name
      view.submitButton().click()

      expect(calledWith).toEqual(name)
      container.remove()
    })
  })
})
