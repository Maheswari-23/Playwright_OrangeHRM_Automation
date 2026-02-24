const { LoginPage } = require('../pages/LoginPage');

class LoginActions {
  constructor(page) {
    this.loginPage = new LoginPage(page);
  }

  async login(username, password) {
    await this.loginPage.navigate();
    await this.loginPage.usernameInput.fill(username);
    await this.loginPage.passwordInput.fill(password);
    await this.loginPage.loginButton.click();
  }
}

module.exports = { LoginActions };