const locators = require('../pageObjects/loginPage');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async openApp() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(usernameValue, passwordValue) {
    await this.page.fill(locators.username, usernameValue);
    await this.page.fill(locators.password, passwordValue);
    await this.page.click(locators.loginButton);
  }
}

module.exports = { LoginPage };